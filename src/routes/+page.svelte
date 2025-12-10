<script lang="ts">
    import {
        Carousel, 
        Controls,
        CarouselIndicators,
        Card,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterBrand,
        FooterLinkGroup,
        Hr,
        A,
        Li,
        List,
        Button,
        ButtonGroup,

        buttonGroup

    } from "flowbite-svelte";

    import title from "$lib/assets/wolfson-robotics-title.png";
    import v_title from "$lib/assets/wr-title-vertical.png";
    import down_arrow from "$lib/assets/down-arrow.svg";
    import logo from "$lib/assets/icons/19916_logo_fordarbackgrounds.png";
    import square_promo from "$lib/assets/team-sticker.png";
    import robot_img from "$lib/assets/robot.jpg";
    import instagram_icon from "$lib/assets/icons/instagram.png";
    import team_photo from "$lib/assets/team_photo.jpg";
    let title_bg = team_photo;

    let glob_imgs = import.meta.glob('/src/lib/assets/carousel_imgs/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
    const carousel_imgs = Object.values(glob_imgs).map((url) => ({ src: url, alt: '' }))

    
    let section2: HTMLElement;
    let contacts_section: HTMLElement;
    function goToSection(section: HTMLElement) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    
</script>


<main>

<section 
class="w-screen flex flex-col gap-y-8 items-center justify-between h-screen bg-cover bg-center"
style="background-image: url({title_bg});"
>
    <div class=" contain rounded-3xl w-fit p-5">
        <picture>
            <source media="(min-width:465px)" srcset={title}>
            <img class="w-full h-full object-contain" alt="wolfson" src={v_title}/>
        </picture>
        
    </div>
    <div class="flex flex-col items-center gap-y-8">
        
        <button class="animate-bounce cursor-pointer" on:click={() => goToSection(section2)}>
            <img alt="to next section" src={down_arrow} class="w-16 h-16 filter invert"/>
        </button> 
    </div>
    

</section>


<section bind:this={section2} class="w-screen flex flex-col items-center text-center py-16 gap-y-6 px-4 sm:px-12 lg:px-48" >
    <h2 class="font-bold text-center text-wolfson-red text-5xl">The WOLFPACK!</h2>
    <div class="flex flex-col gap-y-4 text-soft">
       <p>
            We are team 19916 of the FIRST<sup>®</sup> Tech Challenge North East Florida League, known as The WOLFPACK!. We are based in Jacksonville, Florida, of Duval County, as the robotics team of Samuel W. Wolfson High School. Every year, we gather returning and new members to design, build, and test a robot created for the express purpose of competing in the seasonal FTC season. Our robot is created each season from the efforts of our team members and our club leaders, who dedicate their time and skill to help assemble and program the robot to full usability, and compete in the FTC tournaments.
        </p>
        <h3 class="text-2xl font-bold text-wolfson-red">Robotics Team of Samuel W. Wolfson High School</h3>
        <p>
            As a robotics team of an advanced studies high school, we aim to promote STEM to our school and our county district of Duval. We want to represent Wolfson's capabilities in the STEM field and demonstrate the knowledge and skills the school has promoted in us during our academic endeavors. We are proud to be part of the PACK!
        </p>
    </div>
</section>

<Hr class="hr-primary"/>

<section class="flex flex-col items-center text-soft px-2 gap-y-2">
    <h2 class="font-bold">Quick Links</h2>
    <ButtonGroup class="text-softx">
        <Button target=_blank href="https://www.duvalschools.org/o/swhs" class="text-soft">Wolfson High School</Button>
        <Button href="/robot-code" class="text-soft">Robot Code</Button>
        <Button target=_blank href="https://github.com/Wolfson-Robotics" class="text-soft">Github</Button>
        <Button target=_blank href="https://ftc-events.firstinspires.org/2024/region/USFL/league/FLNE" class="text-soft">FTC NE-FL League</Button>
    </ButtonGroup>
</section>

<Hr class="hr-primary"/>

<section class="my-[5dvh] sm:my-[10dvh] px-2">
    <h2 class="text-center font-bold text-wolfson-red text-5xl">FTC Into The Deep</h2>
    <div class="flex flex-col-reverse lg:flex-row justify-center items-center gap-x-10 gap-y-4 py-10 px-10">
            <Card size="lg">
                <List tag="ul" class="space-y-1 p-4 text-soft">
                        The Robot was developed overtime throughout the 2024-2025 FTC season,
                    Into the Deep. It went through many different changes and iterations, but towards
                    the end of the Northeast Florida meets, we finalized the following changes to the
                    robot:
                    <br>
                    <Li>
                        <b>Claw</b>: Located on the vertical slide, the claw was made for grabbing
                        samples and specimens from the observation zone and placing them in
                        the baskets and submersible bars. Thanks to its reach, we are able to reach both the 
                        high basket and high bar.
                    </Li>
                    <Li>
                        <b>Lift and hanging mechanism:</b> Our lift uses a belt drive system in order to reach
                        the high basket and the high bar. In addition, we have a Home Depot garage hook on
                        the bottom of the vertical slide shaft repurposed to support the robot on the high bar.
                    </Li>
                    <Li>
                        <b>Roller intake</b>: Located at the back of the robot, the roller intake uses
                        a horizontal slide to extend in to the submersible, and a 2 rollers to
                        squeeze the samples into place. The roller mechanism is 3D printed and an
                        arm allows it to rotated up from the ground.
                    </Li>
                    <Li>
                        <b><a id="special-a" href="/robot-code">Autonomous</a></b>:
                        Programmed in Java, our autonomous consists of a combination of preset
                        instructions and autocorrection features. The robot is capable of putting
                        four samples in the high basket during autonomous.
                    </Li>
                </List>
            </Card>
            <img class="sm:max-w-[50dvh] object-scale-down rounded-3xl" alt="Wolfson robotics FTC robot" src={robot_img}>
        </div>
</section>

<Hr class="hr-primary"/>

<section class="px-4 sm:px-10 lg:px-20 my-[5dvh] sm:my-[10dvh] py-0 flex flex-col gap-y-8">
    <h2 class="text-center font-bold text-wolfson-red text-5xl">Club in Action</h2>
    <Carousel class="h-[40dvh] sm:h-[80dvh]!" images={carousel_imgs} duration={6000}>
        <CarouselIndicators></CarouselIndicators>
        <Controls></Controls>
    </Carousel>
</section>

<Hr class="hr-primary"/>

<section
bind:this={contacts_section} 
class="my-[5dvh] sm:my-[10dvh] px-4 sm:px-10 lg:px-20 flex items-center flex-col sm:flex-row gap-y-3 gap-x-20 justify-center text-soft">
    <Card class="dark:bg-white">
        <h3 class="text-center font-bold text-wolfson-red text-2xl py-2">Interested? Contact Us</h3>
        <A class="a-primary"href="mailto:wolfsonrobotics@gmail.com">
            wolfsonrobotics@gmail.com
        </A>
        <A class="a-primary"href="mailto:piccad@duvalschools.org@">
            piccad@duvalschools.org
        </A>
        <A class="a-primary"href="mailto:wrightr7@duvalschools.org">
            wrightr7@duvalschools.org
        </A>
        <h4 class="text-center font-bold text-wolfson-red text-xl py-2">Socials</h4>
        <A target="_blank" class="a-primary"href="https://www.instagram.com/wolfpack_robotics/">
            <div class="flex flex-row gap-x-3 items-center">
                <img class="object-scale-down w-10 h-10" alt="instagram" src={instagram_icon} />
                <p class="mx-auto">Instagram</p>
            </div>
        </A>
    </Card>
    <img class="object-contain" alt="Wolfson robotics logo and team number" src={square_promo}/>
</section>

</main>

<Footer footerType="logo">
  <div class="sm:flex sm:items-center justify-center gap-x-3 gap-y-2 text-soft">
    <FooterBrand href="/" src={logo} alt="Wolfson Robotics Logo" name="Wolfson Robotics" />
    <p>FTC Team 19916</p>
    <p>Samuel W. Wolfson Robotics School for the Advanced Studies</p>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <FooterCopyright href="/" by="Wolfson Robotics" />
</Footer>

<style>
#special-a {
    font-weight: bold;
    text-decoration: underline;
    transition: all 500ms;
}
#special-a:hover {
    font-size: larger;
}


</style>