<template>
  <section class="section">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="tile is-primary">
        <UserForm />
      </div>
    </div>
  </section>
</template>

<script>
import FormBuilder from "@/components/FormFactory/FormBuilder";
import FormDirector from "@/components/FormFactory/FormDirector";

export default {
  name: "home",
  components: {
    UserForm: new FormDirector(new FormBuilder()).makeUserForm()
  }
};
</script>
