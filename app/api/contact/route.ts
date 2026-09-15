import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      role = 'Leadership / Executive',
      companyName,
      websiteUrl = '',
      location,
      fleetSize,
      rooftops,
      currentErp,
      inquiryType = 'Consultation',
      sourceType = 'general',
      sourceTitle = 'Enterprise Platform',
      sourceSlug = '',
      subject = 'Platform Consultation',
      message = '',
      modules = [],
    } = body;

    const refId = `DMS-${Math.floor(100000 + Math.random() * 900000)}`;
    const moduleList = Array.isArray(modules) && modules.length > 0 ? modules.join(', ') : 'Operating Suite';

    // If Resend API key is available, send email dispatch
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const emailSubject = `New Inquiry: ${companyName} — ${fullName} (${inquiryType})`;
      
      const plainTextContent = `
New Enterprise Inquiry Received [Ref: ${refId}]
--------------------------------------------------
Contact Name: ${fullName} (${role})
Work Email: ${email}
Direct Phone: ${phone || 'Not provided'}
Company: ${companyName}
Location: ${location || 'Not provided'}
Rooftops / Footprint: ${rooftops || fleetSize || 'Not specified'}
Current DMS: ${currentErp || 'None'}
Requested Modules: ${moduleList}
Website: ${websiteUrl || 'Not provided'}

Inquiry Focus: ${sourceTitle} (${sourceType})
Subject: ${subject}

Message:
${message}

--------------------------------------------------
Origin Slug: ${sourceSlug || 'direct'}
Submitted via DMSPilot Automotive OS Platform
      `.trim();

      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'DMSPilot <onboarding@resend.dev>',
        to: ['sadigulx05@gmail.com'],
        replyTo: email,
        subject: emailSubject,
        text: plainTextContent,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; color: #0f172a; line-height: 1.5;">
            <div style="border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 20px;">
              <span style="display: inline-block; padding: 3px 8px; background-color: #f1f5f9; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Ref: ${refId}</span>
              <h1 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 10px 0 4px 0;">New Dealership Inquiry</h1>
              <p style="font-size: 13px; color: #64748b; margin: 0;">Origin: <strong>${sourceTitle}</strong> &bull; Type: <strong>${inquiryType}</strong></p>
            </div>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-bottom: 20px;">
              <h3 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 0; margin-bottom: 6px;">Client Message</h3>
              <p style="font-size: 14px; color: #1e293b; margin: 0; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
              <tbody>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 35%;">Contact Name</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${fullName} (${role})</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Direct Email</td>
                  <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Direct Phone</td>
                  <td style="padding: 8px 0; color: #0f172a;">${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Company / Dealership</td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${companyName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Footprint / Rooftops</td>
                  <td style="padding: 8px 0; color: #0f172a;">${rooftops || fleetSize || 'Not specified'}</td>
                </tr>
                ${location ? `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Location / HQ</td>
                  <td style="padding: 8px 0; color: #0f172a;">${location}</td>
                </tr>
                ` : ''}
                ${currentErp ? `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Current DMS/CRM</td>
                  <td style="padding: 8px 0; color: #0f172a;">${currentErp}</td>
                </tr>
                ` : ''}
                ${websiteUrl ? `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Website</td>
                  <td style="padding: 8px 0; color: #0f172a;"><a href="${websiteUrl}" target="_blank" style="color: #2563eb; text-decoration: none;">${websiteUrl}</a></td>
                </tr>
                ` : ''}
              </tbody>
            </table>

            <div style="font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 14px;">
              Direct notification dispatched via DMSPilot Automotive OS. Hit reply to contact ${fullName} directly.
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('[API/Contact] Resend returned error:', error);
        return NextResponse.json(
          { success: false, error: `Failed to dispatch email: ${error.message}` },
          { status: 500 }
        );
      }

      console.log(`[API/Contact] Resend email successfully delivered [${data?.id}] for ${refId} to sadigulx05@gmail.com`);
    } else {
      console.warn(`[API/Contact] RESEND_API_KEY is missing! Inquiry [${refId}] logged only:`, {
        fullName,
        email,
        companyName,
      });
      return NextResponse.json(
        { success: false, error: 'Email delivery service is not configured (missing API key).' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      refId,
      message: 'Inquiry successfully received and routed to solutions architecture team.',
    });
  } catch (err) {
    console.error('[API/Contact] Unexpected error handling contact inquiry:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing contact request' },
      { status: 500 }
    );
  }
}
