import axios from 'axios';

// axios({
//   method: 'get',
//   url: 'http://miami.open.211.hsda.api.adopta.agency/services/full/',
//   data: {
//     user: 'brunos',
//     lastName: 'ilovenodejs'
//   }
// });


var organization_id="0A83FBB5-71A7-3A9C-2B5E-54D1B8AD8D43"
var service_id="0464B677-E8E8-7049-8DC4-C8907D621C2A"

var phone= {
    contact_id: "",
    department: null,
    description: "",
    extension: "0",
    id: "FA74EFFE-7585-9E74-41BC-679C37C10541",
    language: "",
    location_id: "E963F479-AC13-4447-4702-0765EDCDF693",
    number: "305-694-4444",
    organization_id: "",
    service_at_location_id: "",
    service_id: "0F2319EC-0DAB-8144-2916-C7041DBD4AAE",
    type: "voice"
}


var organization={
alternate_name: null,
contacts: [],
description: "The program provides access to educational and enrollment services for the Affordable Care Act. Helps individuals, families, and small businesses apply for health insurance through the Affordable Care Act Marketplace.",
email: null,
funding: [],
id: "0835B15E-5300-6B42-0758-54DFF85EBD58",
legal_status: "",
locations: [{
    alternate_name:null,
    description:"See listed services",
    id:"BBB931FC-D721-4E36-020D-A0A93709847A",
    latitude:"26.0402",
    longitude:"-80.1567",
    name:"Hollywood, FL",
    organization_id:"0835B15E-5300-6B42-0758-54DFF85EBD58",
    transportation:""
    }
    ],
name:"COGNOSANTE, LLC.",
programs:[],
services:[{
    accreditations: "",
alternate_name: null,
application_process: "",
description: "See listed services",
email: null,
fees: "",
id: "9FA9B531-5E9B-DB5D-0BB7-1BB3BE77C837",
interpretation_services: "",
licenses: "",
location_id: "BBB931FC-D721-4E36-020D-A0A93709847A",
name: "Hollywood, FL",
organization_id: "0835B15E-5300-6B42-0758-54DFF85EBD58",
program_id: "",
status: "1",
url: null,
wait_time: ""
}

],
tax_id:"",
tax_status:"",
url:"http://cognosante.com/",
year_incorporated:null
}


axios.get('http://miami.open.211.hsda.api.adopta.agency/services/full/')
  .then(response => console.log(response))
  .catch(error => console.log(error));