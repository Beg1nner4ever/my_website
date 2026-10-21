import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";

// Privacy policy of the L'Envol Android app, linked from its Google Play listing.
export const metadata = {
  title: "Politique de confidentialité — L’Envol",
  description: "Politique de confidentialité de l’application L’Envol du Studio l’Envol, Antibes.",
};

export default async function LenvolPrivacyPolicy() {
  const source = fs.readFileSync(path.join(process.cwd(), "content/legal/lenvol-confidentialite.md"), "utf8");
  const { content } = await compileMDX({ source, components: mdxComponents });

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <article lang="fr" className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <p className="text-xs text-muted-foreground mb-4">Dernière mise à jour : 21 octobre 2026</p>
          <h1 className="font-heading text-4xl md:text-5xl tracking-tight text-foreground leading-tight">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Application L’Envol — Studio l’Envol, Antibes</p>
          <div className="editorial-separator mt-8" />
        </header>
        <div className="prose-custom">{content}</div>
      </article>
    </div>
  );
}
