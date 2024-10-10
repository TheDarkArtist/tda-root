import { NextRequest, NextResponse } from "next/server";
import UAParser from "ua-parser-js";

export const GET = async (req: NextRequest) => {
  // Extract IP address (using x-forwarded-for header for proxy requests)
  const ip = req.headers.get("x-forwarded-for") || req.ip || "IP not available";

  // Extract the User-Agent string from the request headers
  const userAgentString =
    req.headers.get("user-agent") || "User-Agent not available";

  // Initialize the User-Agent parser
  const parser = new UAParser();
  const uaResult = parser.setUA(userAgentString).getResult();

  // Extract browser details
  const browser = uaResult.browser.name || "Browser not available";
  const browserVersion = uaResult.browser.version || "Version not available";

  // Extract operating system details
  const os = uaResult.os.name || "OS not available";
  const osVersion = uaResult.os.version || "OS Version not available";

  // Extract device details (if available)
  const device = uaResult.device.model || "Device not available";
  const deviceType = uaResult.device.type || "Device Type not available";

  // Extract other useful headers for additional context
  const referer = req.headers.get("referer") || "Referer not available";
  const acceptLanguage =
    req.headers.get("accept-language") || "Language not available";
  const contentType =
    req.headers.get("content-type") || "Content-Type not available";
  const protocol =
    req.headers.get("x-forwarded-proto") || "Protocol not available";

  // Get all cookies sent with the request
  const cookies = req.cookies || {};

  // Prepare the JSON response with all collected information
  return NextResponse.json({
    ip, // User's IP Address
    userAgentString, // Raw User-Agent string
    browser, // Browser name (e.g., Chrome, Firefox)
    browserVersion, // Browser version
    os, // Operating system (e.g., Windows, macOS, Android)
    osVersion, // Operating system version
    device, // Device model (if applicable)
    deviceType, // Device type (mobile, desktop, tablet)
    referer, // Referring page (if available)
    acceptLanguage, // Preferred language of the user (from headers)
    contentType, // Content type of the request
    protocol, // HTTP or HTTPS
    cookies, // Cookies sent with the request
  });
};
