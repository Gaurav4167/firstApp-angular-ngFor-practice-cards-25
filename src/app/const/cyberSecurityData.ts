import { IcyberSecurity } from "../models/cyberSecurity_i";

export const cyberSecurityArr : IcyberSecurity[] = [
  { module: "Network Security", summary: "Protect networks using firewalls, intrusion detection systems, VPNs, and segmentation. Learn how to monitor traffic, block suspicious activity, and secure the perimeter of an organization." },
  { module: "Cryptography", summary: "Secure data with symmetric and asymmetric encryption, hashing, and digital signatures. Understand how TLS, certificates, and key management keep communication private and trustworthy." },
  { module: "Ethical Hacking", summary: "Think like an attacker to find vulnerabilities legally before real criminals do. Practice reconnaissance, scanning, exploitation, and reporting following responsible disclosure guidelines." },
  { module: "Malware Analysis", summary: "Study how viruses, worms, ransomware, and trojans behave and spread. Learn static and dynamic analysis techniques to understand threats and build effective defenses." },
  { module: "Web Security", summary: "Prevent common attacks such as XSS, CSRF, SQL injection, and insecure deserialization. Follow OWASP guidelines, validate inputs, and apply secure headers to harden web applications." },
  { module: "Authentication", summary: "Verify identity using passwords, OTPs, biometrics, and tokens like JWT and OAuth. Learn multi-factor authentication and session management to keep user accounts safe." },
  { module: "Incident Response", summary: "Detect, contain, eradicate, and recover from security breaches in a structured way. Prepare playbooks, collect evidence, and conduct post-incident reviews to prevent repeat attacks." },
  { module: "Penetration Testing", summary: "Simulate real-world attacks on systems, apps, and networks to test their defenses. Use tools like Nmap and Burp Suite, then document findings with clear remediation steps." },
  { module: "Security Compliance", summary: "Follow standards and regulations like ISO 27001, GDPR, and PCI-DSS. Understand audits, policies, and risk assessments that keep organizations legally and ethically secure." },
  { module: "Social Engineering", summary: "Recognize human-based manipulation tactics such as phishing, pretexting, and impersonation. Train teams to question suspicious requests and build a strong security-aware culture." }
];