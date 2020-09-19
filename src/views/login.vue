<template>
	<div class="container">

		<h1>Login page</h1>

		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<form v-on:submit.prevent="login">
					<div class="form-group">
						<input
							type="email"
							class="form-control"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Email address"
							v-model="email"
							required
						>
					</div>
					<div class="form-group">
						<input
							type="password"
							class="form-control"
							id="password"
							placeholder="Password"
							v-model="password"
							required
						>
						<div
							class="text-danger"
							v-if="password.length >=1 && password.length <6"
						>password short</div>

					</div>
					<button
						type="submit"
						class="btn btn-primary btn-block"
					>Submit</button>
				</form>
			</div>
			<div class="col-md-right"></div>
		</div>

	</div>
</template>

<script>
	import firebase from "firebase";
	export default {
		name: "login",
		data() {
			return {
				email: "",
				password: ""
			};
		},

		methods: {
			login: function() {
				console.log("Email : " + this.email);
				var self = this;
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(user => {
						console.log(user.user);

						localStorage.setItem("email", self.email);
						localStorage.setItem("pass", self.password);

						console.log(
							"email - localStorage : " + localStorage.getItem("email")
						);
						console.log("pass - localStorage : " + localStorage.getItem("pass"));

						self.$router.push("/dashbord");
					})
					.catch(function(error) {
						alert("Unable to login user : " + error.message);
					});

				// if (firebase.auth().currentUser) {
				// 	this.$router.push("/");
				// }
			}
		}
		// mounted: function() {
		// 	if (firebase.auth().currentUser)
		// 	 this.$router.push("/dashbord");
		// }

		// mounted: function() {
		// 	if (firebase.auth().currentUser) this.$router.replace("./dashbord");
		// }
	};
</script>

<style lang="scss" scoped>
	@import "../scss/login.scss";
</style>

