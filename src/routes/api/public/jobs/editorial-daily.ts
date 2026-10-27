import { createFileRoute } from "@tanstack/react-router";
import { authenticateCronRequest } from "@/integrations/supabase/cron-auth";

export const Route = createFileRoute("/api/public/jobs/editorial-daily")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authFailure = await authenticateCronRequest(request);
        if (authFailure) return authFailure;
        const apiKey = process.env["LOVABLE_API_KEY"];
        const firecrawlKey = process.env["FIRECRAWL_API_KEY"];
        if (!apiKey || !firecrawlKey) return Response.json({ success: false, error: "not_configured" }, { status: 500 });
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: job } = await supabaseAdmin.from("editorial_job").select("paused,enabled").eq("id", 1).single();
        if (job?.paused || !job?.enabled) return Response.json({ success: false, skipped: true, reason: "paused" });
        const { generateDraftBatch } = await import("@/lib/editorial-generation.server");
        const result = await generateDraftBatch(supabaseAdmin, apiKey, firecrawlKey);
        return Response.json(result, { status: result.success ? 200 : 502 });
      },
    },
  },
});
