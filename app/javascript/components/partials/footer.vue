<template lang='pug'>
footer.bg-dark
  .container
    .row
      .col-md-6 
        h5.text-white Super Posting
        p.text-white You can posting whatever you want
      .col-md-6
        h5.text-white Links
        ul
          li
            a.text-white(href='https://github.com/IsaiasAntonio') GitHub 
</template>
<script>
export default{
}
</script>
<style>
footer{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
}
</style>
