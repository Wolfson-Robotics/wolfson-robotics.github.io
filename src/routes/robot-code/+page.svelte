<script>
    import { Card, Hr, Button } from "flowbite-svelte";

    import code_img from "$lib/assets/androidstudioexample.png";
    import auto_img from "$lib/assets/autocodeexmaple.png";
</script>


<main>


<section class="py-5">
    <h1 class="text-wolfson-red text-3xl text-center font-bold">The Robot Code</h1>
    <div class="flex flex-col sm:flex-row px-5 sm:px-20 py-5 gap-10">
        <Card size="lg" class="text-soft gap-y-2 p-4">
            <p>
                The robot was coded entirely in Java using the <a class="link-regular read-more" href="https://developer.android.com/studio">Android Studio IDE</a>, which differs to the more beginner-friendly blocks IDE provided by FTC. Although blocks allows the programmer to make basic code for the robot, it lacks the many useful functionalities of Java.
            </p>
            <p>
                The project is stored on an online repository host called <a class="link-regular read-more" href="https://github.com">GitHub</a>, you can find the 2024-2025 season repository <a class="link-regular read-more" href="https://github.com/wolfson-robotics/Into-The-Deep">here</a>. It is reccomended to store code in an online repository to prevent an accident where code is lost and unable to be recovered. Github and many other repositories, uses a file versioning
                tool called <a class="link-regular read-more" href="https://git-scm.com/downloads">git</a>, which is reccomended to use in order to preserve file history to revert changes if needed or to use as a record for progress for the portfolio. Both "git" and "GitHub" are free and will prevent any accidental code loss.
            </p>
            <p>
                The repository is
                <a class="link-regular read-more" href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo">forked</a>
                from the original
                <a class="link-regular read-more" href="https://github.com/FIRST-Tech-Challenge/FtcRobotController">FtcRobotController</a>.
                We expand upon this code in TeamCode/src/main/java/org/firstinspires/ftc/teamcode, as per
                FTC's instructions. The robot is built on one initial class called RobotBase.java, which
                is used in all TeleOp classes as it provides reusable methods and variables reused in
                in AutoJava.java and DriveJava.java. DriveJava is simple and mainly provides a for loop
                that iterates over each gamepad button to check if it is active, if it is the corresponding
                interaction is activated (i.e. moving the joystick up triggers the wheels moving forward).
                For AutoJava see the below section.
            </p>
        </Card>
        
        <img class="object-scale-down rounded-md overflow-hidden" alt="Android studio robot code" src={code_img}/>
    </div>
</section>

<Hr class="hr-primary"/>

<section class="py-5">
    <h1 class="text-wolfson-red text-3xl text-center font-bold">Autonomous and The Debugger</h1>
    <div class="flex flex-col sm:flex-row-reverse px-5 sm:px-20 py-5 gap-10">
        <Card size="lg" class="text-soft gap-y-2 p-4">
            <p>
                The robot was coded entirely in Java using the <a class="link-regular read-more" href="https://developer.android.com/studio">Android Studio IDE</a>, which differs to the more beginner-friendly blocks IDE provided by FTC. Although blocks allows the programmer to make basic code for the robot, it simplifies Java and thus removes many pieces of useful functionality of Java.
            </p>
            <p>
                The project is stored on an online repository host called <a class="link-regular read-more" href="https://github.com">GitHub</a>, you can find the 2024-2025 season repository <a class="link-regular read-more" href="https://github.com/wolfson-robotics/Into-The-Deep">here</a>. It is reccomended to store code in an online repository to prevent an accident where code is lost and unable to be recovered. Github and many other repositories, uses a file versioning tool called <a class="link-regular read-more" href="https://git-scm.com/downloads">git</a>, which is reccomended to use in order to preserve file history to revert changes if needed or to use as a progress record for the portfolio. Both "git" and "GitHub" are free and will prevent any accidental code loss.
            </p>
            <p>
                The repository is <a class="link-regular read-more" href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo">forked</a> from the original <a class="link-regular read-more" href="https://github.com/FIRST-Tech-Challenge/FtcRobotController">FtcRobotController</a>. We expand upon this code in TeamCode/src/main/java/org/firstinspires/ftc/teamcode, as per FTC's instructions. The robot is built on one initial class called RobotBase.java, which is used in all TeleOp classes as it provides reusable methods and variables reused in in AutoJava.java and DriveJava.java. DriveJava is simple and mainly provides a for loop that iterates over each gamepad button to check if it is active, if it is the corresponding interaction is activated (i.e. moving the joystick up triggers the wheels moving forward). For AutoJava see the below section.
            </p>
        </Card>
        <img class="object-scale-down rounded-md overflow-hidden" alt="Android studio robot code" src={auto_img}/>
    </div>
</section>

<div class="flex justify-center py-4">
    <Button shadow class="bg-wolfson-red text-white font-bold" href="/">Return</Button>
</div>




</main>

<style>
a {
    font-weight: bold;
    text-decoration: underline;
    transition: all 500ms;
}
a:hover {
    font-size: larger;
}
</style>