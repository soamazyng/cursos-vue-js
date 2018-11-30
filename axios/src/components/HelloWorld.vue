<template>
  <div class="hello">
    {{info}}       
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "HelloWorld",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    this.$axios
      .post("http://portalrh.sunsetcom.com.br/api/login", { token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1IiwiaWRfb2xkIjoiMzYwIiwicHJpbWVpcm9fbm9tZSI6IkphcXVlbGluZSIsInNlZ3VuZG9fbm9tZSI6IlRlaXhlaXJhIEJlbmVkaWN0byIsImVtYWlsIjoiamFxdWVsaW5lLnRlaXhlaXJhQHN1bnNldGNvbS5jb20uYnIiLCJkZXBhcnRhbWVudG9faWQiOiI3IiwiYXZhdGFyIjoiZTA3Yzc5NTMtN2Q4NS00MTU5LThkZjQtMDkwZTY4ZjAxNTZjLmpwZyIsIm5iZiI6MTU0MDQwMzQ5MiwiZXhwIjoxNTQwNDg5ODkyLCJpYXQiOjE1NDA0MDM0OTJ9.BY_RnqOVk2lSi3v50I5C7BrY1-3plpljYSoRpqnAUu0CppMTTDmaCuoOSqeQHQbD0D9476rC_ABBP3AJk9G-rA" })
      .then(response => (this.info = response));

    // const jwtDecode = VueJwtDecode.decode(
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vcG9ydGFscmguc3Vuc2V0Y29tLmNvbS5ici9hcGkvbG9naW4iLCJpYXQiOjE1NDAzMDA5ODMsImV4cCI6MTU3MTgzNjk4MywibmJmIjoxNTQwMzAwOTgzLCJqdGkiOiJzZEp3S2RTUGtGTkVodm9YIiwic3ViIjoxLCJwcnYiOiIwYjBjZjUwYWYxMjNkODUwNmUxNmViYTdjYjY3NjI5NzRkYTNhYzNhIiwiaWQiOjEsInRvb2xzX2lkIjoyNSwicHJpbWVpcm9fbm9tZSI6IkphcXVlbGluZSIsInNlZ3VuZG9fbm9tZSI6IlRlaXhlaXJhIEJlbmVkaWN0byIsImVtYWlsIjoiamFxdWVsaW5lLnRlaXhlaXJhQHN1bnNldGNvbS5jb20uYnIiLCJhdmF0YXIiOiJlMDdjNzk1My03ZDg1LTQxNTktOGRmNC0wOTBlNjhmMDE1NmMuanBnIiwibGFzdF9hY3RpdmUiOiIyMDE4LTEwLTExIDE4OjQ2OjU3IiwiY3JlYXRlZF9hdCI6eyJkYXRlIjoiMjAxOC0xMC0xMSAyMTo0Nzo0NS4wMDAwMDAiLCJ0aW1lem9uZV90eXBlIjozLCJ0aW1lem9uZSI6IlVUQyJ9LCJ1cGRhdGVkX2F0Ijp7ImRhdGUiOiIyMDE4LTEwLTIyIDEzOjU1OjA3LjAwMDAwMCIsInRpbWV6b25lX3R5cGUiOjMsInRpbWV6b25lIjoiVVRDIn19.jCdP9opiOfkBEsqXLP38eafY3jbfP3bbZ_Y93oS8OQQ"
    // );    

     const current_time = Date.now() / 1000;    

    // if (jwtDecode.exp < current_time) {
    //   console.log("data expirada");
    // }else{
    //   console.log("não expirou");
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
