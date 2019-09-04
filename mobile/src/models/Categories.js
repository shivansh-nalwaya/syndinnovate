import Images from "../images";

class Categories {
  all() {
    return Promise.resolve([
      { title: "Savings Account", image: Images.SavingsAccount },
      { title: "Credit Card", image: Images.CreditCard },
      { title: "Housing Loan", image: Images.HousingLoan },
      { title: "Personal Loan", image: Images.PersonalLoan },
      { title: "Insurance Policy", image: Images.InsurancePolicy },
      { title: "Others", image: Images.Others }
    ]);
  }
}

export default Categories;
