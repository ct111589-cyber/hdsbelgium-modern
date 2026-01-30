import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect to your default language immediately
  redirect("/en");
}
}
