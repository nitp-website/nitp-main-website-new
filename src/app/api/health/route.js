/**
 * Health Check API endpoint for Docker deployment
 * Returns 200 OK if the application is running properly
 */
export async function GET() {
  try {
    // You can add more health checks here if needed
    // For example: database connectivity, external API checks, etc.
    
    return Response.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      port: process.env.PORT || '3002'
    });
  } catch (error) {
    return Response.json(
      { 
        status: 'error', 
        message: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
