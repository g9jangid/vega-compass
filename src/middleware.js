// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');

  const allowedHosts = ['vegacompass.com', 'localhost:3000'];

  if (host && !allowedHosts.includes(host)) {
    return NextResponse.redirect('https://vegacompass.com');
  }

  return NextResponse.next();
}
