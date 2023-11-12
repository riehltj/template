<script>
	import Button from './Button.svelte';
  import Link from './Link.svelte';
  import Logo from './Logo.svelte';

  import '../styles.css';
</script>

<nav class="w-full flex justify-between items-center border-solid text-black font-semibold text-lg">
  <Logo />
  <Link link="/" content="HOME"></Link>
  <Link link="/services" content="SERVICES"></Link>
  <Link link="/about" content="ABOUT"></Link>
  <Link link="/gallery" content="GALLERY"></Link>
  <Link link="/faq" content="FAQ"></Link>
  <Link link="/reviews" content="REVIEWS"></Link>

  <Button color='black' content="CALL US" link="tel:4405377162"></Button>
</nav>

