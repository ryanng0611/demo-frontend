<template>
  <div id="user-list">
    <b-table
      v-if="userData"
      :data="userData"
      :columns="columns"
      :striped="isStriped"
      :sort-multiple="multiColumnSortingEnabled"
    ></b-table>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { UserData } from "../models/users/userData";

@Component()
export default class UserList extends Vue {
  isNarrowed = true;
  isCentered = true;
  isStriped = true;
  multiColumnSortingEnabled = true;
  userData = [];
  defaultText = "Hehe";

  columns = [
    {
      field: "userId",
      label: "ID",
      width: "40",
      numeric: true,
      sortable: true,
    },
    {
      field: "username",
      label: "User Name",
      sortable: true,
      //   centered: true,
    },
    {
      field: "password",
      label: "Password",
      sortable: true,
    },
  ];

  mounted() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const baseURL = "http://localhost:3000";
      const response = await axios.get(`${baseURL}/users/findAllUsers`);
      this.userData = response.data.map(
        (data) => new UserData(data.userId, data.username, data.password)
      );
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
#user-list * {
  box-sizing: border-box;
}

#user-list {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px auto;
}

p {
  text-align: center;
}

th {
  /* Your desired CSS styles for all headers */
  background-color: #ea0a0a;
  font-weight: bold;
  padding: 10px;
}
</style>
