const payloadLogin = () => {
  return {
    "username": "it.qa",
    "email": "it.qa@edot.id",
    "password": "it.QA2025"
  }
}

const payloadCreateIndonesia = () => {
  return {
    'companyNameIndo': 'Company Indonesia Testing',
    'emailIndo': 'companyindo@gmail.com',
    'phoneIndo': '812442434213',
    'addressIndo': 'Jalan. Testing No. 123',
    'countryIndo': 'Indonesia',
    'dataIndonesia': {
      'province': 'DKI Daerah Khusus Ibukota JAKARTA',
      'city': 'JAKARTA PUSAT',
      'district': 'CEMPAKA PUTIH',
      'subdistrict': 'CEMPAKA PUTIH BARAT'
    },
    'branch': 'Branch HQ Testing'
  }
}

const payloadCreateMalaysia = () => {
  return {
    'companyNameMalay': 'Company Malaysia Testing',
    'emailMalay': 'companymalay@gmail.com',
    'phoneMalay': '812442434213',
    'addressMalay': 'Jalan. Testing No. 123',
    'countryMalay': 'Malaysia',
    'dataMalaysia': {
      'state': 'Kelantan',
      'city': 'Kota Bharu',
      'location': 'Bangunan MGU',
      'postalCode': '15000'
    },
    'branch': 'Branch HQ Testing'
  }
}
const payloadCreatePhilippine = () => {
  return {
    'companyNamePhilippine': 'Company Philippine Testing',
    'emailPhilippine': 'companypinoy@gmail.com',
    'phonePhilippine': '812442434213',
    'addressPhilippine': 'Jalan. Testing No. 123',
    'countryPhilippine': 'Philippines',
    'dataPhilippine': {
      'region': 'Region I (Ilocos Region)',
      'province': 'Ilocos Norte',
      'city': 'Bacarra',
      'bangaray': 'Cabaruan'
    },
    'branch': 'Branch HQ Testing'
  }
}

const payloadGeneralInfo = () => {
  return {
    'name': 'Esuite Admin',
    'username': 'esuiteAdmin123',
    'email': 'esuiteAdmin123@gmail.com',
    'phone': '8512312323',
    'password': 'Rhama@123',
    'employeeID': 'Rhama123'
  }
}

export {
  payloadLogin,
  payloadCreateIndonesia,
  payloadCreateMalaysia,
  payloadCreatePhilippine,
  payloadGeneralInfo
}