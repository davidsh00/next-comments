const dummyData = [
  {
    id: "h1",
    title: "Hiring an employee",
    img: "images/employee.jpg",
    description:
      "we need an employee for doing daily works and he should was Regular at time and work",
    remote: false,
    address: "tehran, Moloavy Sq, 23 St",
    adTime: "2022-08-05",
  },
  {
    id: "h2",
    title: "Hiring a worker",
    img: "images/worker.jpg",
    description: "for building works and he has expect in his work",
    remote: false,
    address: "tehran, shohada Sq, 53 St, 125236 zipcode",
    adTime: "2022-06-05",
  },
  {
    id: "h3",
    title: "Hiring a Front-End Developer",
    img: "images/web-developer.jpg",
    description:
      "we need a front end developer works with react js and must have +3 year work exprience.",
    remote: true,
    address: "isfahan, SioSePol st, 125236 zipcode",
    adTime: "2021-02-05",
  },
];

function getAllHires() {
  return dummyData;
}
function getRemoteHires() {
  return dummyData.filter((data) => data.remote === true);
}
function getDataSortHires(year, month) {
  return dummyData.filter((data) => {
    const hireDate = new Date(data.adTime);
    const hireYear = hireDate.getFullYear();
    const hireMonth = hireDate.getMonth();
    if (hireYear === year && hireMonth === month - 1) {
      return true;
    }
  });
}
function getDetailsHire(id) {
   return dummyData.find(data=>data.id===id)
}

export { getAllHires, getRemoteHires, getDataSortHires, getDetailsHire };
