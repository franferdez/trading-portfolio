import React, { cloneElement, Fragment } from "react";
import { graphql, Query } from "react-apollo";
import { authQuery } from "../../api";

// console.log("authQuery", authQuery);
// const ConnectionResult = ({ children, data: { loading = false } = {} }) =>
//   loading ? "TODO: replace for LOADING..." : children;

// export const Authentication = graphql(authQuery, {
//   options: { fetchPolicy: "network-only" }
// })(ConnectionResult);

export default function Authentication(props) {
  return (
    <Query query={authQuery} fetchPolicy="network-only">
      {({ data, loading, error }) => {
        if (loading) return <p>"TODO: replace for LOADING..."</p>; //TODO: <Loading />;

        return props.children;
      }}
    </Query>
  );
}
// console.log("Authentication", Authentication);
