import { Idevops } from "../models/devops_i";

export const devOpsArr : Idevops[] = [
  { tool: "CI/CD", usage: "Automate building, testing, and deploying code on every commit. Catch bugs early, release faster, and reduce manual errors with reliable pipelines." },
  { tool: "Jenkins", usage: "Open-source automation server for creating build, test, and deployment pipelines. Use plugins and Jenkinsfiles to integrate with Git, Docker, and cloud platforms." },
  { tool: "Kubernetes", usage: "Orchestrate containers across clusters with automatic scaling, self-healing, and rolling updates. Learn pods, services, deployments, and config maps to run apps at scale." },
  { tool: "Terraform", usage: "Provision cloud infrastructure using declarative code. Version your servers, networks, and databases so environments are repeatable, reviewable, and easy to recreate." },
  { tool: "Ansible", usage: "Automate configuration management, application deployment, and server updates using simple YAML playbooks. No agents required, which makes it quick to adopt." },
  { tool: "GitHub Actions", usage: "Run workflows directly from your repository on push, pull request, or schedule. Build, test, and deploy projects using reusable community actions and secrets." },
  { tool: "Prometheus", usage: "Collect time-series metrics from applications and servers, and set alerts on thresholds. Query data with PromQL to monitor performance and system health." },
  { tool: "Grafana", usage: "Visualize metrics and logs with interactive, customizable dashboards. Connect multiple data sources and share insights with the whole team." },
  { tool: "Nginx", usage: "Serve static content, act as a reverse proxy, and balance load across servers. Configure SSL, caching, and compression to improve speed and security." },
  { tool: "Linux Basics", usage: "Master shell commands, file permissions, processes, and package management. Strong Linux skills are essential for managing servers, containers, and cloud environments." }
];