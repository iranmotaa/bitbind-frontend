import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1 className="text-background-foreground text-lg font-semibold">BitBind</h1>
      <Bell className="text-background-foreground" />
    </header>
  );
}
