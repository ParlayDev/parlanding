import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import axios from "axios";
import { useAlert } from "react-alert";
import WebSocketFeed from "./WebSocketFeed.js";

const FormContainer = tw.div`w-full flex-1 mt-8`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg bg-primary-500 hover:bg-primary-900 focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 ml-3`}
  }
  .text {
    ${tw`mr-8`}
  }
`;
const Select = tw.select`
py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
`;
const VerifyUsername = () => {
  const [verify, setVerify] = useState({
    FNgamertag: "",
    FN_Platform: "",
  });
  const alert = useAlert();
  const [action, setAction] = useState(false);
  const pauth = window.localStorage.getItem("pauthorization");
  const auth = window.localStorage.getItem("authorization");
  const id = window.localStorage.getItem("id");
  const handleChange = (e) => {
    setVerify({ ...verify, [e.target.name]: e.target.value });
  };
  const onVerifySubmit = (e) => {
    e.preventDefault();
    axios
      .all([
        axios.post(
          "https://api.sportsflare.io/boy/v1/verify/fortnite/",
          {
            displayName: verify.FNgamertag,
            organizationUserId: `${id}`,
          },
          {
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          }
        ),
        axios.post(
          `http://localhost:4000/api/user/${id}`,
          { FNgamertag: verify.FNgamertag, FN_Platform: verify.FN_Platform },
          {
            headers: {
              pauthorization: `${pauth}`,
              "Content-Type": "application/json",
            },
          }
        ),
      ])
      .then((res) => {
        console.log("resssssss", res);
        axios.post(
          `http://localhost:4000/api/user/${id}`,
          { sf_fn_ID: res[0].data.id },
          {
            headers: {
              pauthorization: `${pauth}`,
              "Content-Type": "application/json",
            },
          }
        );
        alert.show("Verify process started!", {
          title: "",
          closeCopy: "Cancel",
          actions: [
            {
              copy: "continue",
              onClick: () => {
                setAction("true");
              },
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <FormContainer className="shadow">
        {!action ? (
          <Form onSubmit={onVerifySubmit}>
            <Input
              type="displayName"
              placeholder="Display Name"
              name="FNgamertag"
              onChange={handleChange}
            />
            <Select
              className="px-3 py-2 mt-1 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              onChange={handleChange}
              name="FN_Platform"
            >
              <option value="null">Platform</option>
              <option value="KBM">PC</option>
              <option value="GAMEPAD">CONSOLE</option>
              <option value="TOUCH">MOBILE</option>
            </Select>
            <SubmitButton type="submit">Submit</SubmitButton>
            {/* add this websocekt component ToDo */}
          </Form>
        ) : (
          <WebSocketFeed id={id} />
        )}
      </FormContainer>
    </div>
  );
};

export default VerifyUsername;
