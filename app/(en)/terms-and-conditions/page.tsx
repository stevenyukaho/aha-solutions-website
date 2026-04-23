import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions for AHA Solutions & Systems Inc. covering SaaS usage, subscriptions, and consumer rights in Ontario, Canada.',
};

const h2Style: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--text)',
  marginTop: 48,
  marginBottom: 16,
};

const h3Style: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 600,
  color: 'var(--text)',
  marginTop: 32,
  marginBottom: 12,
};

const pStyle: React.CSSProperties = { marginBottom: 16 };

const ulStyle: React.CSSProperties = { paddingLeft: 20, marginBottom: 16 };

const liStyle: React.CSSProperties = { marginBottom: 8 };

export default function TermsAndConditionsPage() {
  return (
    <div className="wrap" style={{ padding: '80px 0 120px' }}>
      <h1 style={{ marginBottom: 32 }}>Terms &amp; Conditions</h1>
      <div style={{ maxWidth: 780, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>

        <h2 style={h2Style}>Interpretation and Definitions</h2>

        <h3 style={h3Style}>Interpretation</h3>
        <p style={pStyle}>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions.
        </p>

        <h3 style={h3Style}>Definitions</h3>
        <p style={pStyle}>For the purposes of these Terms and Conditions:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Account</strong> means a unique account created for You to access our Service
            or parts of our Service.
          </li>
          <li style={liStyle}>
            <strong>Country</strong> refers to: Ontario, Canada.
          </li>
          <li style={liStyle}>
            <strong>Company</strong> refers to AHA Solutions &amp; Systems Inc.
          </li>
          <li style={liStyle}>
            <strong>Device</strong> means any device that can access the Service.
          </li>
          <li style={liStyle}>
            <strong>Feedback</strong> means feedback, innovations or suggestions sent by You.
          </li>
          <li style={liStyle}>
            <strong>Goods</strong> refer to the items, digital content, or software subscriptions
            offered for sale.
          </li>
          <li style={liStyle}>
            <strong>Orders</strong> mean a request by You to purchase Goods or Services from Us.
          </li>
          <li style={liStyle}>
            <strong>Service</strong> refers to the Website and the SaaS application provided
            therein.
          </li>
          <li style={liStyle}>
            <strong>Terms and Conditions</strong> mean these Terms that form the entire agreement
            between You and the Company.
          </li>
          <li style={liStyle}>
            <strong>Website</strong> refers to AHA Solutions &amp; Systems Inc., accessible from{' '}
            <a href="https://www.ahasolutions.ca" style={{ color: 'var(--accent)' }}>
              https://www.ahasolutions.ca
            </a>
          </li>
          <li style={liStyle}>
            <strong>You</strong> means the individual accessing or using the Service.
          </li>
        </ul>

        <h2 style={h2Style}>Acknowledgement</h2>
        <p style={pStyle}>
          These are the Terms and Conditions governing the use of this Service. Your access to and
          use of the Service is conditioned on Your acceptance of these Terms. By clicking &ldquo;I
          Accept&rdquo; during account creation or checkout, You agree to be bound by these Terms.
        </p>
        <p style={pStyle}>You represent that you are over the age of 18.</p>
        <p style={pStyle}>
          <strong>Statutory Rights:</strong> Nothing in these Terms shall be construed as waiving
          any statutory rights a consumer has under Ontario law, including the Consumer Protection
          Act, 2023.
        </p>

        <h2 style={h2Style}>Placing Orders for Goods</h2>
        <p style={pStyle}>
          By placing an Order through the Service, You warrant that You are legally capable of
          entering into binding contracts.
        </p>

        <h3 style={h3Style}>Delivery of Agreement</h3>
        <p style={pStyle}>
          Upon acceptance of these Terms and the placement of an Order, the Company will provide You
          with a confirmation email containing the details of the transaction.
        </p>

        <h3 style={h3Style}>Your Information</h3>
        <p style={pStyle}>
          You may be asked to supply information relevant to Your Order including name, email, phone
          number, credit card number, billing address, and shipping information.
        </p>

        <h3 style={h3Style}>Order Cancellation</h3>
        <p style={pStyle}>
          We reserve the right to refuse or cancel Your Order at any time for reasons including
          Goods availability, errors in descriptions or prices, or suspected fraud.
        </p>

        <h2 style={h2Style}>Order Cancellation Rights and Refund Policy</h2>
        <p style={pStyle}>
          You acknowledge that by purchasing digital content or a SaaS subscription, if performance
          has begun with Your prior express consent, You may lose Your right of cancellation for
          that billing cycle, except where required by Ontario law.
        </p>

        <h2 style={h2Style}>Availability, Errors and Inaccuracies</h2>
        <p style={pStyle}>
          We cannot and do not guarantee the accuracy or completeness of any information, including
          prices, specifications, availability, and services.
        </p>

        <h2 style={h2Style}>Prices Policy</h2>
        <p style={pStyle}>
          The Company reserves the right to revise its prices at any time prior to accepting an
          Order.
        </p>

        <h2 style={h2Style}>Payments</h2>
        <p style={pStyle}>
          All Goods purchased are subject to payment terms agreed upon at checkout.
        </p>

        <h2 style={h2Style}>User Accounts</h2>
        <p style={pStyle}>
          When You create an account, You must provide accurate, complete, and current information.
          You are responsible for safeguarding your password.
        </p>

        <h2 style={h2Style}>Intellectual Property</h2>
        <p style={pStyle}>
          The Service and its original content, features and functionality are the exclusive
          property of the Company and its licensors.
        </p>

        <h2 style={h2Style}>Your Feedback to Us</h2>
        <p style={pStyle}>
          You assign all rights, title and interest in any Feedback You provide the Company.
        </p>

        <h2 style={h2Style}>Accessibility (AODA)</h2>
        <p style={pStyle}>
          The Company is committed to providing services in accordance with the Accessibility for
          Ontarians with Disabilities Act (AODA).
        </p>

        <h2 style={h2Style}>Links to Other Websites</h2>
        <p style={pStyle}>
          Our Service may contain links to third-party web sites or services not owned or controlled
          by the Company.
        </p>

        <h2 style={h2Style}>Termination</h2>
        <p style={pStyle}>
          We may terminate or suspend Your Account immediately for reasonable cause, including
          breach of these Terms.
        </p>

        <h2 style={h2Style}>Limitation of Liability</h2>
        <p style={pStyle}>
          The entire liability of the Company shall be limited to the amount actually paid by You
          through the Service or 100 CAD if You haven&apos;t purchased anything.
        </p>
        <p style={pStyle}>
          <strong>Ontario Enforceability:</strong> Some limitations may not be enforceable in
          Ontario. In such cases, liability will be limited to the maximum extent permitted by
          applicable law.
        </p>

        <h2 style={h2Style}>&ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; Disclaimer</h2>
        <p style={pStyle}>
          The Service is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without
          warranty of any kind.
        </p>

        <h2 style={h2Style}>Governing Law</h2>
        <p style={pStyle}>
          These Terms are governed by the laws of the Province of Ontario and the laws of Canada
          applicable therein.
        </p>

        <h2 style={h2Style}>Disputes Resolution</h2>
        <p style={pStyle}>
          Any dispute shall be subject to the exclusive jurisdiction of the courts of the Province
          of Ontario.
        </p>

        <h2 style={h2Style}>Severability</h2>
        <p style={pStyle}>
          If any provision is held to be unenforceable, the remaining provisions will continue in
          full force.
        </p>

        <h2 style={h2Style}>Changes to These Terms and Conditions</h2>
        <p style={pStyle}>
          We reserve the right to modify or replace these Terms at any time with at least 30
          days&apos; notice for material changes.
        </p>

        <h2 style={h2Style}>Contact Us</h2>
        <p style={pStyle}>
          If you have any questions, You can contact us by email:{' '}
          <a href="mailto:steven@ahasolutions.ca" style={{ color: 'var(--accent)' }}>
            steven@ahasolutions.ca
          </a>
        </p>
      </div>
    </div>
  );
}
