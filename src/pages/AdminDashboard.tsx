import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LogOut, Search, Trash2, Eye, Zap } from "lucide-react";

interface Lead {
  id: string;
  boligtype: string;
  personer: string;
  forbrug: string;
  nuvaerende_selskab: string | null;
  adresse: string;
  navn: string;
  email: string;
  telefon: string;
  status: string;
  notes: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("alle");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin");
      return;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Kunne ikke hente leads");
      console.error(error);
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Kunne ikke opdatere status");
    } else {
      toast.success("Status opdateret");
      fetchLeads();
      if (selectedLead?.id === id) {
        setSelectedLead({ ...selectedLead, status });
      }
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Er du sikker på du vil slette dette lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) {
      toast.error("Kunne ikke slette lead");
    } else {
      toast.success("Lead slettet");
      setSelectedLead(null);
      fetchLeads();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.navn.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.telefon.includes(search) ||
      lead.adresse.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "alle" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusColors: Record<string, string> = {
    ny: "bg-primary/10 text-primary",
    kontaktet: "bg-amber-100 text-amber-700",
    afsluttet: "bg-accent/10 text-accent",
    afvist: "bg-destructive/10 text-destructive",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 px-4 py-4">
        <div className="container max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Net-Partner Admin</h1>
              <p className="text-xs text-muted-foreground">{leads.length} leads total</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Log ud
          </Button>
        </div>
      </header>

      <div className="container max-w-7xl px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Nye", count: leads.filter((l) => l.status === "ny").length, color: "text-primary" },
            { label: "Kontaktet", count: leads.filter((l) => l.status === "kontaktet").length, color: "text-amber-600" },
            { label: "Afsluttet", count: leads.filter((l) => l.status === "afsluttet").length, color: "text-accent" },
            { label: "Total", count: leads.length, color: "text-foreground" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl p-4 border border-border/50 shadow-card">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Søg på navn, email, telefon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-10 rounded-xl"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40 h-10 rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alle">Alle</SelectItem>
              <SelectItem value="ny">Nye</SelectItem>
              <SelectItem value="kontaktet">Kontaktet</SelectItem>
              <SelectItem value="afsluttet">Afsluttet</SelectItem>
              <SelectItem value="afvist">Afvist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leads list */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">Henter leads...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">Ingen leads fundet</div>
            ) : (
              <div className="space-y-3">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className={`bg-card rounded-xl p-4 border cursor-pointer transition-all hover:shadow-card-hover ${
                      selectedLead?.id === lead.id ? "border-primary shadow-card-hover" : "border-border/50 shadow-card"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{lead.navn}</h3>
                        <p className="text-sm text-muted-foreground">{lead.email} · {lead.telefon}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[lead.status] || ""}`}>
                          {lead.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(lead.created_at).toLocaleDateString("da-DK")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Lead detail */}
          <div>
            {selectedLead ? (
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card sticky top-24 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-foreground">Lead detaljer</h2>
                  <Button variant="ghost" size="sm" onClick={() => deleteLead(selectedLead.id)}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    { label: "Navn", value: selectedLead.navn },
                    { label: "Email", value: selectedLead.email },
                    { label: "Telefon", value: selectedLead.telefon },
                    { label: "Adresse", value: selectedLead.adresse },
                    { label: "Boligtype", value: selectedLead.boligtype },
                    { label: "Personer", value: selectedLead.personer },
                    { label: "Forbrug", value: `${selectedLead.forbrug} kWh/år` },
                    { label: "Nuv. selskab", value: selectedLead.nuvaerende_selskab || "—" },
                    { label: "Oprettet", value: new Date(selectedLead.created_at).toLocaleString("da-DK") },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-foreground text-right max-w-[180px] truncate">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Opdater status</p>
                  <Select value={selectedLead.status} onValueChange={(v) => updateStatus(selectedLead.id, v)}>
                    <SelectTrigger className="h-10 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">Ny</SelectItem>
                      <SelectItem value="kontaktet">Kontaktet</SelectItem>
                      <SelectItem value="afsluttet">Afsluttet</SelectItem>
                      <SelectItem value="afvist">Afvist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card text-center">
                <Eye className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Klik på et lead for at se detaljer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
