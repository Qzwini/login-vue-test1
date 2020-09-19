<template>
	<div class="container">

		<h1>Register page</h1>

		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-6">
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="fullname"
						aria-describedby="emailHelp"
						placeholder="Full name"
						v-model="fullname"
						required
					>
				</div>
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
				<div class="form-group">
					<input
						type="password"
						class="form-control"
						id="rePassword"
						placeholder="rePassword"
						v-model="rePassword"
						required
					>
					<div
						class="text-danger"
						v-if="password != rePassword && rePassword.length>6"
					>Password don't match</div>

				</div>

				<button
					@click="register"
					class="btn btn-primary btn-block"
				>Submit</button>

			</div>
			<div class="col-md-right"></div>
		</div>

	</div>
</template>

<script>
	import firebase from "firebase";
	export default {
		name: "register",
		data() {
			return {
				email: "",
				password: "",
				rePassword: ""
			};
		},
		methods: {
			register: function() {
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.email, this.password)
					.then(user => {
						console.log(user.user);
					})
					.catch(function(error) {
						alert("Unable to register user : " + error.message);
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
</style>



			