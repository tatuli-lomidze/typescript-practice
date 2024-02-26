export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAdress,
    phone: string,
    website: string,
    company: ICompany,
  }

  export interface IAdress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    }
  }

  export interface ICompany {
    name: string,
  } 