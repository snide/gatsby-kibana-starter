import React, { Fragment, Link } from "react"

import Layout from "../components/layout";
import { EuiEmptyPrompt, EuiButton } from '@elastic/eui';

const NotFoundPage = () => (
  <Layout>
    <EuiEmptyPrompt
    iconType="editorStrike"
    title={<h2>Ack! There's nothing here.</h2>}
    body={
      <Fragment>
        <p>
          You found a page that doesn't exist.
        </p>
      </Fragment>
    }
    actions={
      <Link to="/">
        <EuiButton color="primary" fill>
          Go Home
        </EuiButton>
      </Link>
    }
  />
  </Layout>
)

export default NotFoundPage
