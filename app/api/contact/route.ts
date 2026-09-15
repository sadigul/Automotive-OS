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
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'DMSPilot Engineering <onboarding@resend.dev>',
          to: 'sadigulx05@gmail.com',
          replyTo: email,
          subject: `[${refId}] ${inquiryType.toUpperCase()}: ${subject} — ${companyName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 24px; color: #0f172a; line-height: 1.5;">
              <div style="border-bottom: 3px solid #0f172a; padding-bottom: 16px; margin-bottom: 24px;">
                <span style="display: inline-block; padding: 4px 10px; background-color: #f1f5f9; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569;">Ref: ${refId}</span>
                <h1 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 12px 0 4px 0;">New Enterprise Inbound Inquiry</h1>
                <p style="font-size: 14px; color: #64748b; margin: 0;">Inquiry Type: <strong>${inquiryType}</strong> &bull; Origin: <strong>${sourceTitle}</strong> (${sourceType})</p>
              </div>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                <h3 style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-top: 0; margin-bottom: 8px;">Message from Executive</h3>
                <p style="font-size: 15px; color: #1e293b; margin: 0; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
                <tbody>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b; width: 35%;">Contact Name</td>
                    <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${fullName} (${role})</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Direct Email</td>
                    <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Direct Phone</td>
                    <td style="padding: 10px 0; color: #0f172a;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Organization / Group</td>
                    <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${companyName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Location / HQ</td>
                    <td style="padding: 10px 0; color: #0f172a;">${location}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Dealership Footprint / Rooftops</td>
                    <td style="padding: 10px 0; color: #0f172a;">${rooftops || fleetSize || 'Not specified'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Current DMS/CRM Software</td>
                    <td style="padding: 10px 0; color: #0f172a;">${currentErp}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Selected Modules</td>
                    <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${moduleList}</td>
                  </tr>
                  ${websiteUrl ? `
                  <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Website</td>
                    <td style="padding: 10px 0; color: #0f172a;"><a href="${websiteUrl}" target="_blank" style="color: #2563eb; text-decoration: none;">${websiteUrl}</a></td>
                  </tr>
                  ` : ''}
                </tbody>
              </table>

              <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                Direct SLA Dispatch: Response committed within 2 hours. Origin slug: <code>${sourceSlug || 'direct'}</code>.
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('[API/Contact] Resend email dispatch failed:', emailError);
      }
    } else {
      console.log(`[API/Contact] Received inbound inquiry [${refId}]:`, {
        fullName,
        email,
        phone,
        companyName,
        sourceTitle,
        sourceType,
        inquiryType,
        subject,
      });
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
