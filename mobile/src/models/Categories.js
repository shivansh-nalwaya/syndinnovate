import Images from "../images";

class Categories {
  data = [
    { id: 1, title: "Savings Account", image: Images.SavingsAccount },
    { id: 2, title: "Credit Card", image: Images.CreditCard },
    { id: 3, title: "Housing Loan", image: Images.HousingLoan },
    { id: 4, title: "Personal Loan", image: Images.PersonalLoan },
    { id: 5, title: "Insurance Policy", image: Images.InsurancePolicy },
    { id: 6, title: "Others", image: Images.Others }
  ];

  all() {
    return Promise.resolve(this.data);
  }

  find(id) {
    Promise.resolve(this.data.filter(d => d.id === id)[0]);
  }
}

export default Categories;
