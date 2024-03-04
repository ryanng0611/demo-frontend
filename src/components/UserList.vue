<template>
  <div id="user-list">
    <div class="button-div">
      <b-button
        label="Edit"
        class="update-button"
        type="submit is-info"
        icon-left="pen"
        @click="updateRecords"
      /><b-button
        label="Remove"
        class="remove-button"
        type="submit is-danger"
        icon-left="close"
        @click="removeRecords"
      />
    </div>
    <br />
    <b-table
      :data="isEmpty ? [] : userData"
      :columns="columns"
      :striped="isStriped"
      :sort-multiple="multiColumnSortingEnabled"
      checkable
      checkbox-position="right"
      :checked-rows.sync="checkedRows"
      ><template #empty>
        <div class="has-text-centered">No records</div>
      </template>
      <template #bottom-left>
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>
    </b-table>
    <hr />
    <b>Selected items:</b>
    <pre>{{ checkedRows }}</pre>
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
  checkedRows = [];
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

  update() {
    this.fetchData();
  }

  get isEmpty() {
    return this.userData.isEmpty;
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

  async deleteAccounts() {
    try {
      const baseURL = "http://localhost:3000";
      // const data = { username: this.username, password: this.password }; // Prepare JSON data object
      // console.log(data.username + data.password);
      const userIds = this.checkedRows.map((user) => user.userId).join(",");
      const response = await axios.post(
        `${baseURL}/users/deleteUsers/${userIds}`
      );
      this.responseMessage = response.data.message; // Extract response message
    } catch (error) {
      console.error(error);
      this.responseMessage = "Error sending data.";
    } finally {
      this.fetchData();
      this.checkedRows = [];
    }
  }

  async updateRecords() {
    if (this.checkedRows.length <= 0) {
      this.alertCustomError();
    } else {
      this.promptNotClosedWithLoading();
    }
  }

  async removeRecords() {
    if (this.checkedRows.length <= 0) {
      this.alertCustomError();
    } else {
      this.confirmCustomDelete();
    }
  }

  alertCustomError() {
    this.$buefy.dialog.alert({
      title: "Warning",
      message:
        "I don't feel so good Mr. Stark (You just didn't select anything)",
      type: "is-danger",
      hasIcon: true,
      icon: "times-circle",
      iconPack: "fa",
      ariaRole: "alertdialog",
      ariaModal: true,
    });
  }

  confirmCustomDelete() {
    this.$buefy.dialog.confirm({
      title: "Deleting account",
      message:
        "Are you sure you want to <b>delete</b> your account? This action cannot be undone.",
      confirmText: "Delete Account",
      type: "is-danger",
      hasIcon: true,
      closeOnConfirm: true,
      onConfirm: async () => {
        try {
          // Call your API to delete the account
          await this.deleteAccounts(); // Replace with your actual API call
          this.$buefy.toast.open("Account deleted!");
        } catch (error) {
          // Handle any errors that occur during deletion
          console.error(error);
          this.$buefy.toast.open({
            message: "Error deleting account!",
            type: "is-danger",
          }); // Example error toast
        }
      },
    });
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

.button-div {
  display: flex; /* Use flexbox for layout control */
  justify-content: flex-end; /* Align buttons to the right */
  gap: 10px; /* Add spacing between buttons (adjust as needed) */
}

p {
  text-align: center;
}

/* .remove-button {
  float: right;
  text-align: right;
}
*/
.update-button {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
