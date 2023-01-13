export interface Employee{
    id: number, 
    employeeName: string, 
    age: number, 
    addressId: number, 
    positionId: number, 
    dateOfSigning: Date, 
    dateOfLeaving?: Date, 
    isActive: boolean
}