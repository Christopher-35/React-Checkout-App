class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;

    this.handleChange = e => {
      const {
        name,
        value
      } = e.target;
      this.setState({
        [name]: value
      });
    };

    this.submitForm = () => {
      this.props.handleSubmit(this.state); //this.setState(this.initialState);
    };

    this.renderForm2 = () => {
      this.submitForm();
      this.props.handleForm2();
      console.log('renderForm2');
    };

    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.renderForm2 = this.renderForm2.bind(this);
  }

  render() {
    if (!this.props.isFalse) {
      return null;
    } //const {name, job} = this.state;


    return React.createElement("div", null, React.createElement(Form2, {
      handleSubmit: () => {
        this.props.handleSubmit;
      },
      handleChange: this.handleChange,
      submitForm: this.submitForm,
      isFalse: this.state.isFalse,
      handleForm2: this.handleForm2,
      handleForm3: this.props.handleForm3,
      isFalse2: this.props.isFalse2,
      isFalse3: this.props.isFalse3,
      handleForm4: this.props.handleForm4,
      isFalse4: this.props.isFalse4,
      state: this.props.state,
      renderParentCallback: this.props.renderParentCallback
    }), React.createElement("form", {
      method: "POST",
      action: "/f1"
    }, React.createElement("label", null, "Name"), React.createElement("input", {
      type: "text",
      name: "name",
      id: "name" //value={name}
      ,
      onChange: e => this.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "email"), React.createElement("input", {
      type: "text",
      name: "email",
      id: "email" // value={email}
      ,
      onChange: e => this.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "password"), React.createElement("input", {
      type: "text",
      name: "password",
      id: "password" // value={password}
      ,
      onChange: e => this.handleChange(e)
    }), React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: () => this.renderForm2()
    }))) //   {/* F1 collects name, email, and password for account creation. */}
    ;
  }

}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;

    this.renderForm3 = () => {
      this.props.submitForm();
      this.props.handleForm3();
      console.log('renderForm3');
    };

    this.renderForm3 = this.renderForm3.bind(this);
  }

  render() {
    if (!this.props.isFalse2) {
      return null;
    } //const {name, job} = this.state;


    return React.createElement("div", null, React.createElement(Form3, {
      handleSubmit: this.props.handleSubmit,
      handleChange: this.props.handleChange,
      submitForm: this.props.submitForm,
      isFalse: this.props.isFalse,
      handleForm3: this.props.handleForm3,
      isFalse3: this.props.isFalse3,
      handleForm4: this.props.handleForm4,
      isFalse4: this.props.isFalse4,
      state: this.props.state,
      renderParentCallback: this.props.renderParentCallback
    }), React.createElement("form", {
      method: "POST",
      action: "/f2"
    }, React.createElement("label", null, "Address1"), React.createElement("input", {
      type: "text",
      name: "Address1",
      id: "Address1",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "Address2"), React.createElement("input", {
      type: "text",
      name: "Address2",
      id: "Address2",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "City"), React.createElement("input", {
      type: "text",
      name: "City",
      id: "City",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "State"), React.createElement("input", {
      type: "text",
      name: "State",
      id: "State",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "zipcode"), React.createElement("input", {
      type: "text",
      name: "zipcode",
      id: "zipcode",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "Phone Number"), React.createElement("input", {
      type: "text",
      name: "phoneNumber",
      id: "phoneNumber",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: () => {
        this.renderForm3();
      }
    }))) //ine 1, line 2, city, state, zip code) and phone number
    ;
  }

}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;

    this.renderForm4 = () => {
      this.props.submitForm();
      this.props.handleForm4();
    };

    this.renderForm4 = this.renderForm4.bind(this);
  }

  render() {
    if (!this.props.isFalse3) {
      return null;
    }

    return React.createElement("div", null, React.createElement(Form4, {
      handleSubmit: this.props.handleSubmit,
      handleChange: this.props.handleChange,
      submitForm: this.props.submitForm,
      isFalse: this.props.isFalse,
      handleForm3: this.props.handleForm3,
      isFalse3: this.props.isFalse3,
      handleForm4: this.props.handleForm4,
      isFalse4: this.props.isFalse4,
      state: this.props.state,
      renderParentCallback: this.props.renderParentCallback
    }), React.createElement("form", {
      method: "POST",
      action: "/f3"
    }, React.createElement("label", null, "cardNo."), React.createElement("input", {
      type: "text",
      name: "cardNo",
      id: "cardNo",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "expirationDate"), React.createElement("input", {
      type: "text",
      name: "expirationDate",
      id: "expirationDate",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "cvv"), React.createElement("input", {
      type: "text",
      name: "cvv",
      id: "cvv",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("br", null), React.createElement("label", null, "billingZipCode"), React.createElement("input", {
      type: "text",
      name: "billingZipCode",
      id: "billingZipCode",
      onChange: e => this.props.handleChange(e)
    }), React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: () => this.renderForm4()
    }))) //credit card #, expiry date, CVV, and billing zip code
    ;
  }

}

class Form4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  render() {
    if (!this.props.isFalse4) {
      return null;
    }

    return React.createElement("div", null, React.createElement("form", null, React.createElement("label", null, "Confirm Your Info"), React.createElement("br", null), " ", "Name: ", this.props.state[this.props.state.length - 1].name, " ", React.createElement("br", null), "Email: ", this.props.state[this.props.state.length - 1].email, React.createElement("br", null), "Password: ", this.props.state[this.props.state.length - 1].password, React.createElement("br", null), "Address1: ", this.props.state[this.props.state.length - 1].Address1, React.createElement("br", null), "Address2: ", this.props.state[this.props.state.length - 1].Address2, React.createElement("br", null), "City: ", this.props.state[this.props.state.length - 1].City, React.createElement("br", null), "zipcode: ", this.props.state[this.props.state.length - 1].zipcode, React.createElement("br", null), "cardNo.: ", this.props.state[this.props.state.length - 1].cardNo, React.createElement("br", null), "Expiration Date: ", this.props.state[this.props.state.length - 1].expirationDate, React.createElement("br", null), "CVV: ", this.props.state[this.props.state.length - 1].cvv, React.createElement("br", null), "Billing-ZipCode: ", this.props.state[this.props.state.length - 1].billingZipCode, React.createElement("br", null), "Phone-Number: ", this.props.state[this.props.state.length - 1].phoneNumber, React.createElement("br", null), React.createElement("input", {
      type: "button",
      value: "Purchase",
      onClick: () => this.props.renderParentCallback()
    }))) //credit card #, expiry date, CVV, and billing zip code
    ;
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //for button
      isDisabled: false,
      isFalse: false,
      isFalse2: false,
      isFalse3: false,
      isFalse4: false,
      //to store input values
      characters: []
    }; // this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForm2 = this.handleForm2.bind(this);
    this.handleForm3 = this.handleForm3.bind(this);
    this.handleForm4 = this.handleForm4.bind(this);
    this.renderParentCallback = this.renderParentCallback.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(char) {
    // event.preventDefault();
    this.setState({
      characters: [...this.state.characters, char]
    });
  }

  handleClick() {
    this.setState({
      isFalse: !this.state.isFalse,
      isDisabled: !this.state.isDisabled
    });
  }

  handleForm2() {
    this.setState({
      isFalse2: !this.state.isFalse2
    });
    console.log('APP handleForm2');
  }

  handleForm3() {
    this.setState({
      isFalse3: !this.state.isFalse3
    });
    console.log('APP handleForm3');
  }

  handleForm4() {
    this.setState({
      isFalse4: !this.state.isFalse4
    });
  }

  renderParentCallback() {
    this.setState({
      isDisabled: !this.state.isDisabled,
      isFalse: !this.state.isFalse,
      isFalse2: !this.state.isFalse2,
      isFalse3: !this.state.isFalse3,
      isFalse4: !this.state.isFalse4
    });
    this.forceUpdate();
  }

  render() {
    return React.createElement("div", null, React.createElement(Form1, {
      handleSubmit: this.handleSubmit,
      isFalse: this.state.isFalse,
      click: this.handleClick,
      handleForm2: this.handleForm2,
      handleForm3: this.handleForm3,
      isFalse2: this.state.isFalse2,
      isFalse3: this.state.isFalse3,
      handleForm4: this.handleForm4,
      isFalse4: this.state.isFalse4,
      state: this.state.characters,
      renderParentCallback: this.renderParentCallback
    }), React.createElement("form", {
      method: "POST",
      action: "/home"
    }, React.createElement("input", {
      type: "submit",
      value: "Checkout",
      onClick: () => this.handleClick(),
      disabled: this.state.isDisabled
    })));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app')); // class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       fullName: '',
//       email: '',
//       password: '',
//     }
//     this.handleSubmit.bind(this);
//     this.handleInputChange.bind(this);
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//   }
//   handleInputChange (e) => {
//     e.preventDefault();
//     this.setState({
//       //e.target.name works for all inputs
//       [e.target.name]: e.target.value
//     })
//   }
//     // this.handleChange = this.handleChange.bind(this);
//     // this.state = {
//     //   // "DataSource" is some global data source
//     //   comments: DataSource.getComments()
//     // };
//   // componentDidMount() {
//   //   // Subscribe to changes
//   //   DataSource.addChangeListener(this.handleChange);
//   // }
//   // componentWillUnmount() {
//   //   // Clean up listener
//   //   DataSource.removeChangeListener(this.handleChange);
//   // }
//   // handleChange() {
//   //   // Update component state whenever the data source changes
//   //   this.setState({
//   //     comments: DataSource.getComments()
//   //   });
//   // }
//   render() {
//     const {fullName} = this.state
//     return (
//       <div>
//         {/* {this.state.comments.map((comment) => (
//           <Comment comment={comment} key={comment.id} />
//         ))} */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//           type='text'
//           name='fullName'
//           placeholder='name'
//           value={this.state.name}
//           onChange={(e) => this.handleInputChange(e)}
//           />
//         </form>
//         dfsdzsgvvs
//       </div>
//     );
//   }
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkZvcm0xIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJzdWJtaXRGb3JtIiwiaGFuZGxlU3VibWl0IiwicmVuZGVyRm9ybTIiLCJoYW5kbGVGb3JtMiIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInBhc3N3b3JkIiwiYmluZCIsInJlbmRlciIsImlzRmFsc2UiLCJoYW5kbGVGb3JtMyIsImlzRmFsc2UyIiwiaXNGYWxzZTMiLCJoYW5kbGVGb3JtNCIsImlzRmFsc2U0IiwicmVuZGVyUGFyZW50Q2FsbGJhY2siLCJGb3JtMiIsInJlbmRlckZvcm0zIiwiRm9ybTMiLCJyZW5kZXJGb3JtNCIsIkZvcm00IiwibGVuZ3RoIiwiQWRkcmVzczEiLCJBZGRyZXNzMiIsIkNpdHkiLCJ6aXBjb2RlIiwiY2FyZE5vIiwiZXhwaXJhdGlvbkRhdGUiLCJjdnYiLCJiaWxsaW5nWmlwQ29kZSIsInBob25lTnVtYmVyIiwiQXBwIiwiaXNEaXNhYmxlZCIsImNoYXJhY3RlcnMiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY2hhciIsImZvcmNlVXBkYXRlIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFOLFNBQW9CQyxLQUFLLENBQUNDLFNBQTFCLENBQXFDO0FBQ25DQyxFQUFBQSxXQUFXLENBQUVDLEtBQUYsRUFBUztBQUNsQixVQUFNQSxLQUFOO0FBRGtCLFNBYXBCQyxLQWJvQixHQWFaLEtBQUtDLFlBYk87O0FBQUEsU0FlcEJDLFlBZm9CLEdBZUxDLENBQUMsSUFBSTtBQUNsQixZQUFNO0FBQUNDLFFBQUFBLElBQUQ7QUFBT0MsUUFBQUE7QUFBUCxVQUFnQkYsQ0FBQyxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJydcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcylcclxuICAgIHRoaXMucmVuZGVyRm9ybTIgPSB0aGlzLnJlbmRlckZvcm0yLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3VibWl0Rm9ybSA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMuc3RhdGUpXHJcbiAgICAvL3RoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlckZvcm0yID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtKCk7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm0yKClcclxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJGb3JtMicpXHJcbiAgfVxyXG5yZW5kZXIgKCkge1xyXG4gIGlmICghdGhpcy5wcm9wcy5pc0ZhbHNlKXtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICAvL2NvbnN0IHtuYW1lLCBqb2J9ID0gdGhpcy5zdGF0ZTtcclxucmV0dXJuIChcclxuICA8ZGl2PlxyXG48Rm9ybTIgaGFuZGxlU3VibWl0PXsoKT0+e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0fX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuc3VibWl0Rm9ybT17dGhpcy5zdWJtaXRGb3JtfSBpc0ZhbHNlPXt0aGlzLnN0YXRlLmlzRmFsc2V9IGhhbmRsZUZvcm0yPXt0aGlzLmhhbmRsZUZvcm0yfVxyXG5oYW5kbGVGb3JtMz17dGhpcy5wcm9wcy5oYW5kbGVGb3JtM30gaXNGYWxzZTI9e3RoaXMucHJvcHMuaXNGYWxzZTJ9IGlzRmFsc2UzPXt0aGlzLnByb3BzLmlzRmFsc2UzfVxyXG5oYW5kbGVGb3JtND17dGhpcy5wcm9wcy5oYW5kbGVGb3JtNH0gaXNGYWxzZTQ9e3RoaXMucHJvcHMuaXNGYWxzZTR9IHN0YXRlPXt0aGlzLnByb3BzLnN0YXRlfVxyXG5yZW5kZXJQYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5yZW5kZXJQYXJlbnRDYWxsYmFja30vPlxyXG4gIDxmb3JtIG1ldGhvZD0nUE9TVCcgYWN0aW9uPScvZjEnPlxyXG4gICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J25hbWUnXHJcbiAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAvL3ZhbHVlPXtuYW1lfVxyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgLz5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGxhYmVsPmVtYWlsPC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgaWQ9J2VtYWlsJ1xyXG4gICAgICAvLyB2YWx1ZT17ZW1haWx9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+cGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgIC8vIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlKX1cclxuICAgIC8+XHJcbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVuZGVyRm9ybTIoKSB9IC8+XHJcbiAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIC8vICAgey8qIEYxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uICovfVxyXG4pXHJcbn1cclxufVxyXG5jbGFzcyBGb3JtMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnJlbmRlckZvcm0zID0gdGhpcy5yZW5kZXJGb3JtMy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcblxyXG4gIHJlbmRlckZvcm0zID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKCk7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm0zKClcclxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXJGb3JtMycpXHJcbiAgfVxyXG5cclxucmVuZGVyICgpIHtcclxuICBpZiAoIXRoaXMucHJvcHMuaXNGYWxzZTIpe1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIC8vY29uc3Qge25hbWUsIGpvYn0gPSB0aGlzLnN0YXRlO1xyXG5yZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgICA8Rm9ybTMgaGFuZGxlU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0gaGFuZGxlQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX1cclxuc3VibWl0Rm9ybT17dGhpcy5wcm9wcy5zdWJtaXRGb3JtfSBpc0ZhbHNlPXt0aGlzLnByb3BzLmlzRmFsc2V9IGhhbmRsZUZvcm0zPXt0aGlzLnByb3BzLmhhbmRsZUZvcm0zfVxyXG5pc0ZhbHNlMz17dGhpcy5wcm9wcy5pc0ZhbHNlM30gaGFuZGxlRm9ybTQ9e3RoaXMucHJvcHMuaGFuZGxlRm9ybTR9IGlzRmFsc2U0PXt0aGlzLnByb3BzLmlzRmFsc2U0fVxyXG5zdGF0ZT17dGhpcy5wcm9wcy5zdGF0ZX0gcmVuZGVyUGFyZW50Q2FsbGJhY2s9e3RoaXMucHJvcHMucmVuZGVyUGFyZW50Q2FsbGJhY2t9Lz5cclxuICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2YyXCI+XHJcbiAgICA8bGFiZWw+QWRkcmVzczE8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J0FkZHJlc3MxJ1xyXG4gICAgICBpZD0nQWRkcmVzczEnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+QWRkcmVzczI8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J0FkZHJlc3MyJ1xyXG4gICAgICBpZD0nQWRkcmVzczInXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+Q2l0eTwvbGFiZWw+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgbmFtZT0nQ2l0eSdcclxuICAgICAgaWQ9J0NpdHknXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J1N0YXRlJ1xyXG4gICAgICBpZD0nU3RhdGUnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+emlwY29kZTwvbGFiZWw+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgbmFtZT0nemlwY29kZSdcclxuICAgICAgaWQ9J3ppcGNvZGUnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+UGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdwaG9uZU51bWJlcidcclxuICAgICAgaWQ9J3Bob25lTnVtYmVyJ1xyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMucHJvcHMuaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgLz5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17KCkgPT4ge3RoaXMucmVuZGVyRm9ybTMoKX19IC8+XHJcbiAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIC8vaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyXHJcbilcclxufVxyXG59XHJcblxyXG5jbGFzcyBGb3JtMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnJlbmRlckZvcm00ID0gdGhpcy5yZW5kZXJGb3JtNC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcblxyXG4gIHJlbmRlckZvcm00ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5zdWJtaXRGb3JtKCk7XHJcbiAgICB0aGlzLnByb3BzLmhhbmRsZUZvcm00KCk7XHJcblxyXG4gIH1cclxuXHJcbnJlbmRlciAoKSB7XHJcbiAgaWYgKCF0aGlzLnByb3BzLmlzRmFsc2UzKXtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbnJldHVybiAoXHJcbiAgPGRpdj5cclxuICAgIDxGb3JtNCBoYW5kbGVTdWJtaXQ9e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0fSBoYW5kbGVDaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfVxyXG5zdWJtaXRGb3JtPXt0aGlzLnByb3BzLnN1Ym1pdEZvcm19IGlzRmFsc2U9e3RoaXMucHJvcHMuaXNGYWxzZX0gaGFuZGxlRm9ybTM9e3RoaXMucHJvcHMuaGFuZGxlRm9ybTN9XHJcbmlzRmFsc2UzPXt0aGlzLnByb3BzLmlzRmFsc2UzfSBoYW5kbGVGb3JtND17dGhpcy5wcm9wcy5oYW5kbGVGb3JtNH0gaXNGYWxzZTQ9e3RoaXMucHJvcHMuaXNGYWxzZTR9XHJcbnN0YXRlPXt0aGlzLnByb3BzLnN0YXRlfSByZW5kZXJQYXJlbnRDYWxsYmFjaz17dGhpcy5wcm9wcy5yZW5kZXJQYXJlbnRDYWxsYmFja30vPlxyXG4gIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvZjNcIj5cclxuICAgIDxsYWJlbD5jYXJkTm8uPC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdjYXJkTm8nXHJcbiAgICAgIGlkPSdjYXJkTm8nXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+ZXhwaXJhdGlvbkRhdGU8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J2V4cGlyYXRpb25EYXRlJ1xyXG4gICAgICBpZD0nZXhwaXJhdGlvbkRhdGUnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+Y3Z2PC9sYWJlbD5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICBuYW1lPSdjdnYnXHJcbiAgICAgIGlkPSdjdnYnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8bGFiZWw+YmlsbGluZ1ppcENvZGU8L2xhYmVsPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgIG5hbWU9J2JpbGxpbmdaaXBDb2RlJ1xyXG4gICAgICBpZD0nYmlsbGluZ1ppcENvZGUnXHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAvPlxyXG5cclxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17KCkgPT4gdGhpcy5yZW5kZXJGb3JtNCgpfSAvPlxyXG4gIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICAvL2NyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlXHJcbilcclxufVxyXG59XHJcblxyXG5jbGFzcyBGb3JtNCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcclxuXHJcbnJlbmRlciAoKSB7XHJcbiAgaWYgKCF0aGlzLnByb3BzLmlzRmFsc2U0KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5yZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgICB7Lypjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0YXRlW3RoaXMucHJvcHMuc3RhdGUubGVuZ3RoLTFdLm5hbWUpKi99XHJcbiAgPGZvcm0+XHJcblxyXG4gICAgPGxhYmVsPkNvbmZpcm0gWW91ciBJbmZvPC9sYWJlbD5cclxuICAgIDxicj48L2JyPlxyXG57Lyoge2BOYW1lOiR7dGhpcy5zdGF0ZS5jaGFyYWN0ZXJzW3RoaXMuc3RhdGUuY2hhcmFjdGVycy5sZW5ndGgtMV0ubmFtZX0gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke30gTmFtZToke31cclxuYH0gKi99IHsvKk5hbWU6ICsge3RoaXMuc3RhdGUuY2hhcmFjdGVyc1t0aGlzLnN0YXRlLmNoYXJhY3RlcnMubGVuZ3RoLTFdLm5hbWV9Ki99XHJcbiBOYW1lOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5uYW1lfSA8YnI+PC9icj5cclxuIEVtYWlsOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5lbWFpbH08YnI+PC9icj5cclxuIFBhc3N3b3JkOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5wYXNzd29yZH08YnI+PC9icj5cclxuIEFkZHJlc3MxOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5BZGRyZXNzMX08YnI+PC9icj5cclxuIEFkZHJlc3MyOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5BZGRyZXNzMn08YnI+PC9icj5cclxuIENpdHk6IHt0aGlzLnByb3BzLnN0YXRlW3RoaXMucHJvcHMuc3RhdGUubGVuZ3RoLTFdLkNpdHl9PGJyPjwvYnI+XHJcbiB6aXBjb2RlOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS56aXBjb2RlfTxicj48L2JyPlxyXG4gY2FyZE5vLjoge3RoaXMucHJvcHMuc3RhdGVbdGhpcy5wcm9wcy5zdGF0ZS5sZW5ndGgtMV0uY2FyZE5vfTxicj48L2JyPlxyXG4gRXhwaXJhdGlvbiBEYXRlOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5leHBpcmF0aW9uRGF0ZX08YnI+PC9icj5cclxuIENWVjoge3RoaXMucHJvcHMuc3RhdGVbdGhpcy5wcm9wcy5zdGF0ZS5sZW5ndGgtMV0uY3Z2fTxicj48L2JyPlxyXG4gQmlsbGluZy1aaXBDb2RlOiB7dGhpcy5wcm9wcy5zdGF0ZVt0aGlzLnByb3BzLnN0YXRlLmxlbmd0aC0xXS5iaWxsaW5nWmlwQ29kZX08YnI+PC9icj5cclxuIFBob25lLU51bWJlcjoge3RoaXMucHJvcHMuc3RhdGVbdGhpcy5wcm9wcy5zdGF0ZS5sZW5ndGgtMV0ucGhvbmVOdW1iZXJ9PGJyPjwvYnI+XHJcbnsvKiB7MSBjb2xsZWN0cyBuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkIGZvciBhY2NvdW50IGNyZWF0aW9uLlxyXG5GMiBjb2xsZWN0cyBzaGlwIHRvIGFkZHJlc3MgKGxpbmUgMSwgbGluZSAyLCBjaXR5LCBzdGF0ZSwgemlwIGNvZGUpIGFuZCBwaG9uZSBudW1iZXIuXHJcbkYzIGNvbGxlY3RzIGNyZWRpdCBjYXJkICMsIGV4cGlyeSBkYXRlLCBDVlYsIGFuZCBiaWxsaW5nIHppcCBjb2RlLn0gKi99XHJcbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUHVyY2hhc2VcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnJlbmRlclBhcmVudENhbGxiYWNrKCl9IC8+XHJcbiAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIC8vY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGVcclxuKVxyXG59XHJcbn1cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLy9mb3IgYnV0dG9uXHJcbiAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBpc0ZhbHNlOiBmYWxzZSxcclxuICAgICAgaXNGYWxzZTI6IGZhbHNlLFxyXG4gICAgICBpc0ZhbHNlMzogZmFsc2UsXHJcbiAgICAgIGlzRmFsc2U0OiBmYWxzZSxcclxuICAgICAgLy90byBzdG9yZSBpbnB1dCB2YWx1ZXNcclxuICAgICAgY2hhcmFjdGVyczogW11cclxuICAgIH1cclxuICAgIC8vIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfVxyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9ybTIgPSB0aGlzLmhhbmRsZUZvcm0yLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUZvcm0zID0gdGhpcy5oYW5kbGVGb3JtMy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVGb3JtNCA9IHRoaXMuaGFuZGxlRm9ybTQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVuZGVyUGFyZW50Q2FsbGJhY2sgPSB0aGlzLnJlbmRlclBhcmVudENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChjaGFyKSB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2hhcmFjdGVyczogWy4uLnRoaXMuc3RhdGUuY2hhcmFjdGVycywgY2hhcl19KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKXtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZhbHNlOiAhdGhpcy5zdGF0ZS5pc0ZhbHNlLCBpc0Rpc2FibGVkOiAhdGhpcy5zdGF0ZS5pc0Rpc2FibGVkfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUZvcm0yKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZhbHNlMjogIXRoaXMuc3RhdGUuaXNGYWxzZTJ9KVxyXG4gICAgY29uc29sZS5sb2coJ0FQUCBoYW5kbGVGb3JtMicpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVGb3JtMygpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNGYWxzZTM6ICF0aGlzLnN0YXRlLmlzRmFsc2UzfSlcclxuICAgIGNvbnNvbGUubG9nKCdBUFAgaGFuZGxlRm9ybTMnKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9ybTQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2lzRmFsc2U0OiAhdGhpcy5zdGF0ZS5pc0ZhbHNlNH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJQYXJlbnRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2lzRGlzYWJsZWQ6ICF0aGlzLnN0YXRlLmlzRGlzYWJsZWQsIGlzRmFsc2U6ICF0aGlzLnN0YXRlLmlzRmFsc2UsIGlzRmFsc2UyOiAhdGhpcy5zdGF0ZS5pc0ZhbHNlMiwgaXNGYWxzZTM6ICF0aGlzLnN0YXRlLmlzRmFsc2UzLCBpc0ZhbHNlNDogIXRoaXMuc3RhdGUuaXNGYWxzZTR9KVxyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICB7LyogPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBtZXRob2Q9J1BPU1QnYWN0aW9uPScvJz4gKi99XHJcbiAgICAgIDxGb3JtMSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpc0ZhbHNlPXt0aGlzLnN0YXRlLmlzRmFsc2V9IGNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICBoYW5kbGVGb3JtMj17dGhpcy5oYW5kbGVGb3JtMn0gaGFuZGxlRm9ybTM9e3RoaXMuaGFuZGxlRm9ybTN9IGlzRmFsc2UyPXt0aGlzLnN0YXRlLmlzRmFsc2UyfVxyXG4gICAgICBpc0ZhbHNlMz17dGhpcy5zdGF0ZS5pc0ZhbHNlM30gaGFuZGxlRm9ybTQ9e3RoaXMuaGFuZGxlRm9ybTR9IGlzRmFsc2U0PXt0aGlzLnN0YXRlLmlzRmFsc2U0fVxyXG4gICAgICBzdGF0ZT17dGhpcy5zdGF0ZS5jaGFyYWN0ZXJzfSByZW5kZXJQYXJlbnRDYWxsYmFjaz17dGhpcy5yZW5kZXJQYXJlbnRDYWxsYmFja30vPlxyXG5cclxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2hvbWVcIiA+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNoZWNrb3V0XCIgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSB9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmlzRGlzYWJsZWR9Lz5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcblxyXG5cclxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKTtcclxuLy8gICAgIHRoaXMuc3RhdGUgPSB7XHJcbi8vICAgICAgIGZ1bGxOYW1lOiAnJyxcclxuLy8gICAgICAgZW1haWw6ICcnLFxyXG4vLyAgICAgICBwYXNzd29yZDogJycsXHJcbi8vICAgICB9XHJcbi8vICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4vLyAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIGhhbmRsZUlucHV0Q2hhbmdlIChlKSA9PiB7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgLy9lLnRhcmdldC5uYW1lIHdvcmtzIGZvciBhbGwgaW5wdXRzXHJcbi8vICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuLy8gICAgIH0pXHJcbi8vICAgfVxyXG4vLyAgICAgLy8gdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4vLyAgICAgLy8gdGhpcy5zdGF0ZSA9IHtcclxuLy8gICAgIC8vICAgLy8gXCJEYXRhU291cmNlXCIgaXMgc29tZSBnbG9iYWwgZGF0YSBzb3VyY2VcclxuLy8gICAgIC8vICAgY29tbWVudHM6IERhdGFTb3VyY2UuZ2V0Q29tbWVudHMoKVxyXG4vLyAgICAgLy8gfTtcclxuXHJcblxyXG5cclxuLy8gICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuLy8gICAvLyAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzXHJcbi8vICAgLy8gICBEYXRhU291cmNlLmFkZENoYW5nZUxpc3RlbmVyKHRoaXMuaGFuZGxlQ2hhbmdlKTtcclxuLy8gICAvLyB9XHJcblxyXG4vLyAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4vLyAgIC8vICAgLy8gQ2xlYW4gdXAgbGlzdGVuZXJcclxuLy8gICAvLyAgIERhdGFTb3VyY2UucmVtb3ZlQ2hhbmdlTGlzdGVuZXIodGhpcy5oYW5kbGVDaGFuZ2UpO1xyXG4vLyAgIC8vIH1cclxuXHJcbi8vICAgLy8gaGFuZGxlQ2hhbmdlKCkge1xyXG4vLyAgIC8vICAgLy8gVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSB3aGVuZXZlciB0aGUgZGF0YSBzb3VyY2UgY2hhbmdlc1xyXG4vLyAgIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgLy8gICAgIGNvbW1lbnRzOiBEYXRhU291cmNlLmdldENvbW1lbnRzKClcclxuLy8gICAvLyAgIH0pO1xyXG4vLyAgIC8vIH1cclxuXHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3Qge2Z1bGxOYW1lfSA9IHRoaXMuc3RhdGVcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgey8qIHt0aGlzLnN0YXRlLmNvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4gKFxyXG4vLyAgICAgICAgICAgPENvbW1lbnQgY29tbWVudD17Y29tbWVudH0ga2V5PXtjb21tZW50LmlkfSAvPlxyXG4vLyAgICAgICAgICkpfSAqL31cclxuLy8gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4vLyAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4vLyAgICAgICAgICAgbmFtZT0nZnVsbE5hbWUnXHJcbi8vICAgICAgICAgICBwbGFjZWhvbGRlcj0nbmFtZSdcclxuLy8gICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbi8vICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9XHJcbi8vICAgICAgICAgICAvPlxyXG5cclxuLy8gICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgICAgZGZzZHpzZ3Z2c1xyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9Il19