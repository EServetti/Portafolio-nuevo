export function calculateAge(birthDate: string) {
    const today = new Date();
    const birth = new Date(birthDate);
    
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // Adjust age if the current month is before the birth month,
    // or if it's the same month but the current day is before the birth day
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

export const calculateTime = (startDate: string) => {
    const today = new Date()
    const date = new Date(startDate)
    const months = (today.getFullYear() - date.getFullYear()) * 12 + (today.getMonth() - date.getMonth())
    return +(months / 12).toFixed(1)   
}

export const formatFilePath = (path: string) => {
    return new URL(path, import.meta.url).href
}