/**
 * Cloudflare Worker for Smart App Info
 * This worker handles API requests and routes them to the backend
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Backend API URL
    const BACKEND_URL = 'https://smart-app-info-backend.vercel.app';
    
    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
      // Forward API requests to backend
      const backendUrl = new URL(url.pathname + url.search, BACKEND_URL);
      
      const backendRequest = new Request(backendUrl, {
        method: request.method,
        headers: request.headers,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      });
      
      try {
        const response = await fetch(backendRequest);
        
        // Add CORS headers if needed
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Access-Control-Allow-Origin', '*');
        newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        newHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      } catch (error) {
        return new Response(
          JSON.stringify({ error: 'Backend API request failed', message: error.message }),
          { status: 502, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
    
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Max-Age': '86400',
        },
      });
    }
    
    // For all other requests, return 404
    return new Response('Not Found', { status: 404 });
  },
};
