import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // return NextResponse.redirect('https://taxi-novoe.ru', 308);
}

// Применяется ко всем путям
export const config = {
  matcher: ['/', '/:path*'],
};
