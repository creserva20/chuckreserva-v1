export const siteConfig = {
  name: "Chuck Reserva",
  title: "Network Operations Analyst | BGP, IPv6 & Internet Routing",
  description: "Portfolio website of Chuck Reserva",
  accentColor: "#1d4ed8",
  social: {
    email: "email@chuckreserva.me",
    linkedin: "https://linkedin.com/in/chuckreserva",
  },
  aboutMe:
    "I’m a Network Operations Analyst (Information Systems Analyst II) at the Illinois Department of Innovation & Technology (DoIT), where I support the design, implementation, and operation of the state’s high-speed, routed WAN infrastructure. With over a decade of experience across public and private sector networks, my primary focus is large scale BGP routing (IPv4 and IPv6), including egress router design, route-policy enforcement, prefix aggregation and transit/IXP connectivity. I regularly work with Cisco WAN aggregation and Internet edge platform, including NCS 5500, NCS 5700 series routers and also support Cisco ASR 9000 platforms that interface between Internet edge and core routing domains, ensuring correct end-to-end traffic across the network. I routinely operate in production routing environments where correctness, stability and traffic behavior directly impact statewide services. My work emphasizes scalable network design, operational reliability, and modern IPv6 adoption. Separately, I operate a personal Autonomous System (AS394935), providing hands-on experience with Internet routing and IPv6 deployment.",
  skills: ["BGP", "Routing", "Network Design", "IPv6", "Internet Routing"],
  projects: [
    {
      name: "BGP Traffic Engineering & Route Policy Design",
      description: "Designed and implemented BGP policies in a multi-homed network environment using local preference, MED, and AS-path prepending to control inbound and outbound traffic flow and improve resiliency.",
      link: "#",
      skills: ["BGP", "Route Policy", "Traffic Engineering"]
    },
    {
      name: "Public ASN & IPv4/IPv6 Deployment (AS394935)",
      description: "Operate a personal Autonomous System (AS394935) with both IPv4 and IPv6 address space, implementing BGP peering, route advertisement, and Internet routing policies in an independent environment.",
      link: "https://bgp.he.net/AS394935",
      skills: ["BGP", "IPv4", "IPv6", "Peering"]
    },
    {
      name: "IPv6 Transition Mechanisms (NAT64, DNS64, 464XLAT)",
      description: "Implemented IPv6-to-IPv4 translation using NAT64 and DNS64, along with 464XLAT (RFC 8781) for IPv4-only application compatibility. Utilized DNS64 discovery (RFC 7050) to enable seamless IPv6-only client access to IPv4 services.",
      link: "#",
      skills: ["IPv6", "NAT64", "DNS64", "464XLAT"]
    },
  ],
  experience: [
    {
      company: "Illinois Department of Innovation & Technology (DoIT)",
      title: "Network Operations Analyst (Information Systems Analyst II)",
      dateRange: "March 2024 - Present",
      bullets: [
        "Design, implement and operate high-speed, routed WAN and Internet edge infrastructure supporting statewide government systems and application delivery.",
        "Lead and execute major network change using documented MOP, including BGP policy design, egress migration, prefix aggregation and MPLS related upgrades, ensuring minimal risk to production services.",
        "Collaborate with peer engineers, NOC teams, and telecom providers to optimize internet routing hardware platforms and high-capacity circuit provisioning.",
        "Perform advance troubleshooting across IPv4 and IPv6 routing domains, including multicast, label-switched paths, using tools such as Wireshark, iPerf, and platform telemetry.",
        "Serve as a technical SME for large-scale routing and Internet connectivity, with hands-on experience on Cisco NCS5500/5700 WAN aggregation and Internet edge routers and ASR 9000 platforms interfacing between edge and core routing domains.",
        "Provide technical documentation, impact analysis and post-change validation to senior leadership, supporting infrastructure planning, change review and long-term modernization efforts.",
        "Deploy and validate BGP over IPv6, MPLS with IPv6 transport and mechanisms, supporting the ongoing evolution of statewide backbone and Internet facing services.",
      ],
    },
    {
      company: "Levi, Ray & Shoup (LRS)",
      title: "Network Security Engineer",
      dateRange: "February 2018 - June 2023",
      bullets: [
        "Managed Cisco Next-Generation Firewalls (Firepower), ASA, and Firepower Management Center (FMC) to enforce access control, network segmentation, and threat prevention across enterprise environment.",
        "Supported Cisco Identity Services Engine (ISE) for 802.1X-based authentication, identity management, and device access control.",
        "Maintained and configured Cisco routers and Catalyst/Nexus switches, supporting campus LAN/WAN infrastructure and secure network connectivity.",
        "Administered VPN solutions (IPSec, DMVPN, and AnyConnect) for secure remote access and site-to-site communications.",
        "Performed firmware upgrades, security patching, and configuration changes in high-availability environments with minimal service disruption.",
        "Collaborated with customer IT teams to implement network security best practices, provide technical documentation, and troubleshoot complex connectivity and security issues.",
      ],
    },
    {
      company: "IT Support",
      title: "Kerber, Eck & Braeckel (KEB)",
      dateRange: "March 2015 - December 2016",
      bullets: [
        "Provided primary technical support for the Springfield office and remote support for six additional offices, supporting approximately 150 users",
        "Administered VMware ESXi 6, vSphere Client, and VMware Horizon View environments",
        "Supported Windows Server 2008 R2 and 2012 infrastructure, including Active Directory, DNS, DHCP, and Group Policy",
        "Maintained TCP/IP LAN/WAN connectivity, troubleshooting workstation and network issues",
        "Managed Terminal Services and user access policies across multiple office locations",
        "Maintained and updated network and systems documentation",
      ],
    },
    {
      company: "Network Administrator",
      title: "Quality Network Solutions (QNS)",
      dateRange: "November 2012 - March 2015",
      bullets: [
        "Managed and supported server infrastructure across seven school campuses",
        "Administered Active Directory, Group Policy, VMware, Hyper-V, and Windows Server environments",
        "Provided day-to-day IT operations support for faculty and administrative staff",
        "Maintained and upgraded server and network systems to ensure reliability and performance",
        "Evaluated infrastructure needs and provided technical recommendations for future improvements",
        "Maintained and updated network and systems documentation",
      ],
    },
  ],
  certifications: [
    {
      name: "Cisco Certified Network Professional (CCNP) Enterprise",
      details: "Valid through June 2028"
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      details: ""
    },
    {
      name: "Hurricane Electric IPv6 Sage",
      details: ""
    }
  ],
};
