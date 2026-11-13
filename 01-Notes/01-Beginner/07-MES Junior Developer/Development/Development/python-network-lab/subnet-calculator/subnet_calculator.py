import ipaddress

def describe_network(cidr: str) -> str:
    """Return a readable summary of an IPv4 or IPv6 network."""
    network = ipaddress.ip_network(cidr, strict=False)
    
    lines = [
        f"Network: {network}",
        f"Network address: {network.network_address}",
        f"Prefix length: /{network.prefixlen}",
        f"Total addresses: {network.num_addresses}",
    ]

    if network.version == 4:
        lines.extend([
            f"Broadcast address: {network.broadcast_address}",
            f"Subnet mask: {network.netmask}",
        ])
        if network.num_addresses > 2:
            first = network.network_address + 1
            last = network.broadcast_address - 1
            lines.append(f"Traditional usable host range: {first} - {last}")
        else:
            lines.append("Traditional usable host range: special-case subnet; verify use case")
    else:
        lines.append("Broadcast address: not applicable (IPv6 has no broadcast)")
        lines.append("Usable host range: depends on your IPv6 allocation and addressing plan")

    return "\n".join(lines)

def main() -> None:
    cidr = input("Enter a network (for example 192.168.10.25/24): ").strip()

    try:
        print(describe_network(cidr))
    except ValueError as error:
        print(f"Invalid network: {error}")

if __name__ == "__main__":
    main()