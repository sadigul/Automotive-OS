import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, companyName, websiteUrl, location, fleetSize, currentErp, modules } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const moduleList = modules && modules.length > 0 
      ? modules.join(', ') 
      : 'All Modules';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #111; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Access Request — AOS</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151; width: 40%;">Full Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Phone</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Company</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Website</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${websiteUrl || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Location</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Fleet Size</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${fleetSize}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Current ERP/CRM</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #111;">${currentErp}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; font-weight: bold; color: #374151;">Requested Modules</td>
            <td style="padding: 12px; border-bottom: 1px solid #f3f4f6; color: #7c3aed; font-weight: bold;">${moduleList}</td>
          </tr>
        </table>

        <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
          This request was submitted via the AOS platform request access form.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"AOS Platform" <${process.env.SMTP_USER}>`,
      to: 'sadigulx05@gmail.com',
      subject: `New Access Request: ${fullName} — ${companyName}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send request' },
      { status: 500 }
    );
  }
}
