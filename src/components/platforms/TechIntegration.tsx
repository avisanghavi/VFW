const restSnippet = `POST /api/v1/highlights
{
  "video_url": "https://...",
  "extract": ["hooks", "proof", "cta"],
  "duration": 30
}`;

const mcpSnippet = `// Install via MCP
mcp install videoforce-highlights

// Natural language extraction
"Find the best testimonial in this video"`;

export default function TechIntegration() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-2">Simple Integration, Powerful Results</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Choose REST API for traditional integration or MCP for Claude-powered applications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">REST API</h3>
            <p className="text-muted-foreground mb-4">Simple HTTP endpoints with JSON responses. White-label ready.</p>
            <pre className="bg-slate-900 text-slate-200 p-4 rounded-md text-sm overflow-x-auto"><code>{restSnippet}</code></pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">MCP Framework</h3>
            <p className="text-muted-foreground mb-4">Native Claude integration for AI-powered applications.</p>
            <pre className="bg-slate-900 text-slate-200 p-4 rounded-md text-sm overflow-x-auto"><code>{mcpSnippet}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}


