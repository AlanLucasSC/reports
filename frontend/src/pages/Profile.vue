<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        model: {
          company: 'IFMS Instituto Federal de Mato Grosso do Sul',
          email: 'gustavo@gmail.com',
          username: 'Ghustmane',
          firstName: 'Gustavo',
          lastName: '',
          address: '',
          city: 'Ladário',
          country: 'Brasil',
          about: 'Desenvolvedor'
        },
        user: {
          fullName: 'Gustavo',
          title: 'Desenvolvedor',
          description: `Fazendo TCC`,
        }
      }
    }
  }
</script>
<style>
</style>
