describe("Login API", () => {
  const apiUrl = ` https://backend-staging.newsmast.org/oauth/token`;

  it("should successfully log in with valid credentials", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: {
        client_id: "uir3d3j_mvcqmH5dCTJ4iuEL2_43M0frClXAfr8U7JI",
        client_secret: "xkXkFgvZJkeEB3RiXAcoiVpj43DJ_MMbC_jsbxzK43o",
        grant_type: "password",
        password: "password",
        redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
        scope: "read write follow",
        username: "sithulwin.binarylab@gmail.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("access_token");
      expect(response.body).to.have.property("token_type");
      expect(response.body).to.have.property("scope");
      expect(response.body).to.have.property("created_at").that.is.a("number");
      expect(response.body).to.have.property("role");
      expect(response.body).to.have.property("community_slug");
      expect(response.body).to.have.property("is_active");
      expect(response.body).to.have.property("is_account_setup_finished");
      expect(response.body).to.have.property("step").that.is.null;
      expect(response.body).to.have.property("user_id");
    });
  });

  it("should fail to log in with invalid credentials", () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      failOnStatusCode: false,
      body: {
        email: "invaliduser@example.com",
        password: "wrongpassword",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error");
    });
  });
});
