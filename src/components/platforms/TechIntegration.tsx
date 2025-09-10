"use client"

import { Button } from "@/components/ui/button"

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
    <section className="py-12 bg-muted/30">
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Building?</h3>
            <p className="text-gray-600 mb-8">Join leading platforms using VideoForce Highlights to help their users create better video content.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-orange-600 hover:opacity-90 text-white px-8 py-4 h-auto"
                      onClick={() => window.location.href = '/book-call'}
                    >
                      Schedule a Call →
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-purple-300 text-purple-700 hover:border-purple-600 hover:text-purple-600 px-8 py-4 h-auto"
                      onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
                    >
                      Try API Demo
                    </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              30-minute technical overview • Implementation roadmap • Revenue model discussion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


