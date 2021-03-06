import axios from "axios";
import * as Config from "./../constants/Config";

export default function callApi(endpoint, method = "GET", body) {
  return (
    axios({
      method: method,
      url: `${Config.URL}/${endpoint}`,
      data: body,
    })
      // .then((res) => {
      //   this.setState({
      //     products: res.data,
      //   });
      // })
      .catch((err) => {
        console.log(err);
      })
  );
}
