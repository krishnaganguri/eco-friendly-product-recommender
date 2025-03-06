<template>
    <div class="profile">
        <h1>User Profile</h1>
        <div class="profile-details">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <!-- Add more user details as needed -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            user: {
                name: 'John Doe',
                email: 'john.doe@example.com'
                // Add more user details as needed
            }
        };
    }
};
</script>

<style scoped>
.profile {
    padding: 20px;
}

.profile-details {
    margin-top: 20px;
}

.profile-details p {
    margin: 5px 0;
}
</style>