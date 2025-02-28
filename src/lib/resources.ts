
export const isDomainAvailable = async (domain: string): Promise<boolean> => {
    console.log(domain)
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Math.random() > 0.5;
}