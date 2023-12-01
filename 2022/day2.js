self.exercise2 = {
    text1: `
    <article class="day-desc"><h2>--- Day 2: Rock Paper Scissors ---</h2><p>The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a giant <a href="https://en.wikipedia.org/wiki/Rock_paper_scissors" target="_blank">Rock Paper Scissors</a> tournament is already in progress.</p>
<p>Rock Paper Scissors is a game between two players. Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.</p>
<p>Appreciative of your help yesterday, one Elf gives you an <em>encrypted strategy guide</em> (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: <code>A</code> for Rock, <code>B</code> for Paper, and <code>C</code> for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.</p>
<p>The second column, <span title="Why do you keep guessing?!">you reason</span>, must be what you should play in response: <code>X</code> for Rock, <code>Y</code> for Paper, and <code>Z</code> for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.</p>
<p>The winner of the whole tournament is the player with the highest score. Your <em>total score</em> is the sum of your scores for each round. The score for a single round is the score for the <em>shape you selected</em> (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the <em>outcome of the round</em> (0 if you lost, 3 if the round was a draw, and 6 if you won).</p>
<p>Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.</p>
<p>For example, suppose you were given the following strategy guide:</p>
<pre><code>A Y
B X
C Z
</code></pre>
<p>This strategy guide predicts and recommends the following:</p>
<ul>
<li>In the first round, your opponent will choose Rock (<code>A</code>), and you should choose Paper (<code>Y</code>). This ends in a win for you with a score of <em>8</em> (2 because you chose Paper + 6 because you won).</li>
<li>In the second round, your opponent will choose Paper (<code>B</code>), and you should choose Rock (<code>X</code>). This ends in a loss for you with a score of <em>1</em> (1 + 0).</li>
<li>The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = <em>6</em>.</li>
</ul>
<p>In this example, if you were to follow the strategy guide, you would get a total score of <code><em>15</em></code> (8 + 1 + 6).</p>
<p><em>What would your total score be if everything goes exactly according to your strategy guide?</em></p>
</article>
    `,
    data: `A X
B Y
B Y
C X
B X
C Z
C Z
A Z
A Z
B Y
C Z
A Z
C Z
C X
B Z
C Z
C Z
C Z
B Y
C Z
C Z
C Z
A Z
A Y
B Z
B Z
A Y
B X
C Z
C Z
A Z
A Z
C Z
A Y
A X
A Z
A Z
B X
B Z
B X
A Z
B X
B Z
B Z
C Z
A Z
A Z
A Z
C Z
B Z
A Z
A Y
A Y
B Y
B Y
B Z
A Z
B Z
A Z
B Z
C Z
B Y
A Z
B Y
A Z
A Z
A Z
C Z
A Y
A Z
C Z
C Z
A Z
A X
B Y
C Z
A Z
A Z
C X
C Z
B X
C X
B X
A Z
C Z
C Z
A Y
A Z
B X
C X
A Z
A Z
C Z
C Z
B Y
C Z
A Z
A Z
A Y
B X
B Y
A Z
C Z
A Z
A Z
A Z
C X
C Y
C Z
B X
B X
B X
A Z
A X
C Z
A Z
B Y
B X
A Y
B X
A Z
C Z
C Z
A X
A Z
C Z
B Z
B X
A Z
C Z
C Z
C X
C Z
C Z
C Z
A Y
B X
A Y
A Z
B Z
B Z
C Z
B Z
B Z
B X
A Z
C Z
A Z
A Y
C Z
A Z
C X
A Z
A Z
A Y
A Y
A Z
C Z
B Y
A X
A Z
A Y
C Z
A Z
B X
A Z
B Y
A X
C X
B X
A Y
A Z
B Z
A Z
A Z
B X
A X
C Z
B X
B Y
A Z
B X
C Z
A Z
C Z
B X
A Z
A Y
A Z
A Z
B X
B X
B Z
A Z
B Y
C Z
B Z
C Z
C Z
B X
B X
A Z
C Z
C Z
A X
B X
B X
A Y
C Z
A Z
A Y
B X
A Z
A Z
B X
A Z
C Z
B X
B Z
B Y
B X
A Y
C Z
C Z
C Z
A X
C Z
A Z
C Z
C Y
C Z
C Z
C Z
B X
A Z
B X
B Z
A Z
C Z
B Y
B Y
B Z
C Z
C Z
C Z
B Z
B Y
A Z
B X
B Z
C Z
A Z
B Y
B Y
A X
C Z
B Y
A Y
B Y
B X
B Y
B Y
A Y
B Y
C X
A Y
A Y
C Z
A Z
A Y
C Z
A Z
A Z
C Z
C Z
C Z
B X
B Y
A Y
A Y
B Z
A Z
B Y
B X
B Y
A Y
A Y
A Z
B Z
C Z
C Z
C Z
A Z
C Z
A Z
A Z
A Z
A Z
C Z
B Y
C Z
B X
C Z
A X
A Z
B X
C Y
C X
A X
A X
A Z
A Z
B X
A Y
B Z
A Z
B Z
A Z
C Z
C X
C Z
C Z
C X
C Z
C Z
C X
C Z
B Z
A Z
B Y
A Z
C Z
B X
C Z
B Z
B Y
A Z
B Y
A Y
B X
B Z
B Z
A Z
B Z
C Z
C Z
A Y
A Z
A X
A Y
C Z
B X
A Z
C X
A Z
A Z
A Z
A Z
C Y
B Y
B Y
A X
C Z
A X
A Z
A Y
C X
A Y
A Y
A Z
C X
C Z
B Z
B X
A Z
C Z
C Z
B Z
B X
C Z
C Z
A Y
B Z
A X
B Y
A Z
C X
B X
C Z
B Y
A X
A Z
B Y
A Y
A Z
B Z
A Y
B Y
A Z
B Y
B X
B Z
A Z
B Y
B Z
A Y
A Z
C Z
B X
C Z
B X
C Z
B Z
C Z
C Z
B Z
A Y
A Y
C Z
B Z
A Z
A X
C Z
A Z
C Z
A Z
A X
A Z
A Z
A Y
B Z
B X
C X
B Y
C Z
B X
B Z
B X
A Z
A Z
A Z
B Z
B Y
A Z
B Y
C Z
B Z
A Z
A Y
C Z
A Z
B Y
B X
B Y
B X
C Z
C Y
A Z
C Z
C Z
A Z
C X
B Z
A Y
B Y
B Y
B Y
C Z
B Z
A Z
B Y
A Z
A Z
C Z
B Y
B Y
A X
A Z
A Z
C Z
A Z
C Z
C Z
A X
B Z
A Z
A Z
C Z
C Z
B Y
B Y
A Z
A Y
A Z
B Y
B Z
A Y
B Z
A Z
A Z
A Y
C Z
A Y
C Z
B X
A Z
A Z
C Z
A Y
C Z
A Z
A Y
A Y
C Z
A Z
A Y
B X
A Y
B X
A Z
A Z
A Y
B Y
B Y
B X
C Z
C Z
B Y
B X
C Z
B Y
C Z
B Y
B X
C Z
A Y
B Z
C X
A Y
C Z
C Z
C X
A Y
A Z
B X
C Z
A Z
B Y
C Z
B X
B Z
C Z
C Z
C Z
A Z
B X
C Z
A Z
A Y
B Y
C Z
A X
C Z
A Y
C X
A Y
B Y
C Z
B X
A Z
C Z
C Z
B Z
B Y
A Z
A Z
A Y
C Z
A Y
A X
A Y
B Z
C Z
C Z
A Z
A Z
C Z
A Y
C Z
C Z
B Z
C Z
C Z
A Z
C Z
B Z
C Z
B X
A Y
A Y
A Z
C X
C Z
C Y
C Z
C Z
C Z
B Z
A Z
C Z
C Z
A Y
B Y
B X
B X
C Z
A Z
B Y
C Z
C Z
B X
C Z
C Z
A Y
A Y
A Z
A Y
B Y
C Z
A X
A Y
C Z
A Z
C Z
C Z
A X
A Z
C Z
B Z
A Z
A Z
B Y
B X
A Z
A Z
B Z
C Z
C Z
A Y
A Z
B Z
B Z
C Z
B Z
A Y
B X
A Z
B X
C Z
A Z
A Y
C Z
C Z
A Z
A Z
A Z
A Z
A Z
B X
C Z
C Z
C Z
A Z
A Z
A Z
A Z
B X
C Z
B X
C Z
A Z
C Z
A X
A Y
A Z
C Z
B Y
C Z
C Z
B Z
C Z
B X
C Z
B X
A Z
A Z
B Y
B X
C Z
C Z
C Z
C Y
C X
B Y
B Y
C Z
A Z
A Z
C Y
C Z
B Y
C X
A Z
B X
A Z
C Z
C Z
A Z
C X
A Z
B Z
B Y
A X
C Z
A Z
B X
A Z
B Y
C Z
B X
C Z
B Y
C Z
A X
C Z
A Z
C Z
A Y
A Y
C Z
C Z
B X
B Z
A Z
C Z
A Z
C Z
A Y
B X
C Z
A Z
B X
C Z
C Z
B Y
C Z
C Z
C Y
B Y
B X
C Z
B Y
A Z
A Z
B X
B Y
B Y
B Y
B Y
B Z
C Z
C Z
A Z
C Z
C X
C Z
B Z
C X
C X
A Z
A Z
B Y
B Z
B Y
C Z
A Y
A Z
B Y
B Y
B X
A Z
A Z
A Z
C Z
C Z
C Z
B Z
A X
A Z
A Y
C Z
A Z
A Z
B Z
B Y
B Y
A X
C Z
C Z
B X
A Z
B Y
A Z
B Z
A Z
C Z
C X
A Y
A Z
C Z
C Z
C Z
A Z
C Z
C Z
B Y
A Z
A Z
A Z
A Y
C Z
A Z
C Z
B Z
A Z
C Z
C X
B Z
C X
B X
C Z
B Z
A Y
C Z
C Z
B X
B Y
B Y
A Z
B X
A Y
A Y
A Z
B Z
C Z
C Z
B Z
A Z
C Z
B Y
C X
B Z
C Z
B Z
C Y
C Z
A Y
A Z
C Z
A Z
A Z
C Z
C Z
C Z
B Z
A Z
C Z
C X
A Z
A Z
B X
B Y
C Z
A Y
A Z
C Z
B Z
C Z
A Y
A Y
C Z
A Z
A Z
B X
A Y
B Y
C Z
C Z
B Y
A Z
A Y
C X
C Z
C Z
A Z
C Z
A Y
C Z
A Z
A Z
C Z
A Z
A X
C Z
C Z
A Z
B Z
B Z
B X
A Z
B X
A Y
A Z
C Z
C Z
A Y
B Z
C Z
A Z
A Z
C X
B Z
B Y
B Y
A Y
B X
B X
C Z
B X
A Z
B X
A Z
C Z
C Z
A Z
B Y
C Z
C X
C Z
C Z
A Z
B X
C Z
C Z
A Y
C Z
C Z
B X
B X
B X
A Z
B Y
C Z
A Z
C Z
C Z
B Y
C Z
A Z
C Z
B Y
B Z
C Z
C Z
C X
C Z
B Z
C Z
B Y
B X
A Z
A Y
B X
A Y
B Y
A Z
C Z
C Z
C Z
B X
C Z
B X
A Z
B X
B Y
A Z
C Z
C Z
C Z
A Y
B Y
A Y
C Z
A Z
C Z
C Z
A Z
A Y
C Z
B X
A Y
A Z
C Z
B Y
C Z
A Z
C Z
B Y
C Z
C Z
B Y
C Z
C Z
B X
C Z
B Y
C Z
B Y
A Z
C Z
B Y
A Z
C Z
C Z
B Y
B X
B Z
A Z
A Y
A Z
A Y
C Z
C Z
B X
C Z
B Y
C Z
C X
C Z
A Y
A Z
C Z
C Z
C Z
A Z
B Y
C Z
C Z
A Z
B Y
C Z
A Y
B Z
B X
A Y
B Y
C Z
A Y
C Z
B Y
B Y
C Z
C Z
B Y
B X
C Z
B X
B Z
B Y
C Z
C Z
C Z
A Z
A X
A Z
B Z
A Z
C Z
A Z
C Z
C Z
A Z
A Z
B Z
C Z
C Z
C Z
A Z
B Y
A Z
A Y
C Z
B X
B X
A Y
C Z
C Z
B X
B Z
C X
B X
B Y
A Z
A Y
A Z
C Z
B X
C Z
B Z
C Z
A Y
C Z
A Y
C Z
B Y
B Z
C Z
C Z
C Z
C Z
C Z
A Z
B Y
C Z
C X
B Y
C X
B Y
B Z
B Y
A Z
A Z
B X
C Y
A Z
C Z
B X
B X
A Z
A Z
B Y
C Z
B Y
B Z
A Y
A Z
C Z
C Z
B X
A Z
A Z
A Z
C Z
C X
C Z
C Z
C Z
C Z
A Z
B Y
C Z
C Z
C Z
B Z
C Z
B X
C Z
A Z
A Z
C Z
C Y
B Y
A Z
A Y
B Z
A Y
B Y
C Z
A Y
C Z
A Z
C Z
B X
C Z
A Z
A Z
B Z
A Z
B Z
A Z
B Y
C Z
B Z
B Y
C Z
A Z
A Z
B X
B X
A Y
A Z
B Y
A Y
A Z
C Z
A X
C Z
A Z
A Z
C Z
A Z
B X
A Z
A Y
A Y
B Y
A Z
A Z
A Z
B Y
B Y
A Z
A Z
C Z
C Z
A Y
B X
B X
C Z
A Y
C Z
C Z
C Z
A Y
C Z
C X
C Z
B Y
A Z
B Y
A Z
C Z
A Y
C Z
A Y
B Z
B X
B Y
B X
B Y
B X
A Y
C Z
C Z
B Z
C Z
C X
B X
A X
A Z
A Z
B Y
C Z
C Z
B Y
C Z
C Z
B Y
A Z
B Z
C X
C Z
C Z
B Y
C X
C Z
B Z
A Z
C Z
B X
A Z
C Z
A Z
C Z
B X
B Z
C Z
C Z
C Z
A Z
B Y
A Y
A Z
C Z
C Z
C Z
B Y
A Z
C Z
C Z
A Z
B Z
B Y
C Z
A Y
A Z
A Z
C Z
C Z
C Z
C Z
A Z
C Z
C Z
A Y
A Y
A Z
C Z
A Z
A Z
B X
A Y
A Z
A Y
C Z
B Z
A Y
A Z
B X
C Z
A Z
A Z
A Y
B Y
C Z
C Z
A Z
B X
A Y
A Z
C Z
C Z
B Y
C Z
A Z
B Y
C Z
C Z
B Y
C X
A Z
C Z
C Z
C Z
C Z
A Z
B Y
A Y
B Y
B Z
C Z
A Z
B Z
C Z
A X
C Z
C X
A Z
A Z
A X
A Z
A Z
A Z
A Z
B X
A Z
A Z
A Z
C Z
C Z
C Z
C Z
A Z
A Y
B X
C Z
B Y
A Y
A Z
C Z
C Z
C Z
B Y
A Z
B Z
C Z
B X
B Z
B Z
B Y
C Z
C X
B Y
A Y
C X
C Z
C Z
B Y
A Z
C Z
A Z
A Z
C Z
C Z
C Z
C Z
B Z
C Z
B X
C Z
B X
B Z
A Z
B Y
C Z
A Z
C Z
A Z
A Y
A Z
C Z
B X
C Z
C Z
A Z
A Z
C Z
C Z
A Z
C Z
A Y
C Z
C Z
A Z
A X
A Z
C Z
A Z
C Z
C Z
A Z
B X
C Z
C Z
C X
A Z
A Z
A X
B X
C Z
C Z
A Z
B X
C X
A Z
C Z
B Y
C Z
A Z
C Z
A Y
A Z
C Z
C Z
B X
A Z
B Y
A Z
C Z
C X
B Z
C Z
A X
A Y
C Z
C Z
C X
B Z
A Z
A Z
B Z
A Y
C X
A Z
C Z
A Z
C Z
A Z
A Z
A Z
C Z
A Z
C Z
B X
A Y
A Z
C Z
B Y
C Z
A Y
C Z
C Z
C Z
C Z
A Z
A Z
B Z
C Z
A Y
C X
C Z
C Y
B Y
C X
A Y
C Z
C Z
B Z
B Y
B Z
A Z
B Y
C Z
C Z
B X
B Y
B Z
A Z
A Z
C Z
B X
A Z
B Y
C Z
C Z
B X
C Z
A X
C Z
B X
A Y
A Z
B Y
C Z
C Z
A Y
A Z
C Z
C Z
A Z
C Z
C Z
C Z
B X
C Z
B Y
B Y
C Z
B Z
C Z
C X
C Z
B X
A Z
B Z
B Z
B Z
C Z
A X
C Z
B X
A Z
A Z
A Z
A Y
C Z
C Z
C Z
C X
A Y
A Z
A Z
C Z
C Z
A Z
B X
C Z
B Y
A X
C X
B Y
B Y
A Y
C X
C Z
B X
A Z
A Z
B Z
A Y
C Z
C Z
A Z
C Z
C Z
A Y
C Z
C Z
B Y
C Z
C Z
A Z
A Z
B Z
A Z
C Z
C Z
C Z
C X
C Z
A Z
C Z
C Z
C Z
C X
C Z
C Z
A Z
B Y
C Z
B X
A Z
C Z
C Y
A Z
A Y
A Z
C X
C X
A Y
B X
A Y
B Y
B Z
B Y
B Y
B Y
B Y
B Y
B Y
B Y
B X
B Z
A Y
A Y
A Y
B Y
A Y
B X
C X
A Z
C Z
A Z
A X
C Z
C Z
B Z
C Z
B Z
B Z
A Z
A Y
A Z
B X
B Z
C Y
A Z
A Z
A Z
C Z
C Z
C Z
C Z
A Z
C Y
A Y
C X
C Z
B Y
C Z
A Z
A X
A Z
B Z
C Z
B X
B X
A Z
C Z
B X
C Z
C Z
A X
C Z
A Z
C Z
C Z
B Z
B Y
B X
B Z
A X
A Y
C Z
A X
A Y
B Y
A Y
C Z
C Z
B X
C Z
B Z
C Z
B Y
C Z
A Z
A Y
B Z
B Z
A Z
A Z
A Z
A Y
C Z
C X
A Z
A X
B Y
B X
A Z
C Z
A Z
A Z
C Z
B Z
B Z
B Y
B Y
A Y
C Z
A Z
A Z
C Z
A Z
C Z
C Z
B X
B Y
C Z
C Z
B X
C X
C Z
A Y
C X
B X
A Z
A Z
A Y
B Y
A Z
B Z
C Z
C Z
A Z
B X
A X
B Y
A Z
B Z
A Z
B Y
C Z
A Z
A Y
C Z
A Y
C Z
C Z
A Z
C Z
C Z
A Z
A Y
C Z
A Z
B Z
A Y
A Z
C Z
C Z
A Y
C Z
A Y
A Z
C X
B X
B Z
B Z
B Z
B Z
B Y
B X
A Z
C Z
B Z
C Z
C Z
C X
A Z
A Z
B X
C Z
A Y
C Z
B Z
A Z
C X
C Z
C Z
B Y
C Z
B Z
A Z
A X
C Z
B X
A Z
B Y
C Y
C X
C Z
A Z
B Z
A Z
B Y
C Z
C Z
A Z
C Z
C Z
C Z
C Z
B Z
C Z
B X
B Y
A Z
B Y
B Y
A Z
C Z
C Z
B Y
B Y
B Y
B Y
B Z
B X
A Z
B Y
B X
A Z
A Y
B X
B X
C Z
C X
B Y
C Z
C Z
A Z
C X
C Z
A Z
B Y
A Z
A Z
A X
C Z
B Y
A Z
C Z
C Z
A Z
B Y
B Y
B Z
B Z
B X
A X
A Z
A Z
C X
B Y
A Y
B Z
A Z
B Y
C Z
C Z
B X
C Z
C Z
A Z
C Z
A Z
A Z
C Z
C Z
C Z
B X
B Z
A Y
B X
C Z
A Z
C Z
A Y
B Y
A X
C Z
A Y
A Z
A Z
A Z
B Z
C Z
C Z
C Z
C Z
C Z
B Z
B X
C Z
A Z
C Z
A X
B Z
C Z
C Z
A Z
A Z
B Y
C Z
A Z
C Z
B Y
A Z
A Y
A Y
C X
C Z
A Z
B Y
C Z
C X
C Z
A Y
A Z
A Z
B X
C Z
B X
B Y
A Y
A Y
B Z
A Y
A Z
B Z
A Z
A X
B Z
C Z
C X
C Z
C Z
C Z
C Z
C X
C Z
A Z
A Z
B X
A Z
A Z
A Z
C Z
A Z
C Y
B Y
B Y
C Z
A Y
B Z
C Z
C Z
C Z
A Z
C Z
A Z
B Z
B Y
A Y
C Z
A Z
A Y
C Z
C Z
A Y
B Y
C Z
A Z
A Y
A Z
B X
C X
C Z
C Z
A Y
A Z
B X
C Z
A Z
C Z
C Z
A Z
C Z
B X
A Z
A Z
B Y
C Z
B X
C Z
C X
A Z
B X
C X
C Z
C Z
A Z
B Y
A Y
C Z
B Z
B Y
C X
B X
C Z
C Y
A Z
A Z
C Z
B X
A Z
C Z
B Y
B X
B Z
B X
A Y
C Z
C Z
C Y
A Z
A Y
C Z
B X
A Z
A Z
B Z
B Z
B X
A Y
A Z
C Z
A Z
A X
A Y
C Z
C Z
B Y
A Z
C Z
B Z
A Z
B Y
C Z
B Y
A Z
B Z
A Z
B Y
B Z
C Z
C Z
A Y
C Z
A Z
B X
C Z
B X
B X
A Z
C Z
B Z
A Z
C Z
C Z
C Z
C Z
A Z
C Z
B Z
C Z
A Z
B X
C Z
A Z
C Z
C Z
A Y
A Y
C Z
A Y
A X
C Z
A Z
A Z
B Z
A Z
A X
C Z
B Y
A Y
B Y
A Y
C Z
C Z
B X
A Z
B X
B Z
B Z
A Y
C X
A Y
C Z
B Y
A Z
A Z
C Z
A Z
A Z
B Y
C X
B X
A Z
A X
C Z
A Z
B Y
A Z
C Z
C Z
A Z
B X
B Z
A X
A Y
A Y
B Y
B Z
B X
B Z
C X
B Z
C Z
C Z
B X
B Y
B X
B Z
B Z
C Z
A Z
A X
B X
C Z
A Z
B Y
B Y
C X
A Z
B X
A X
C Z
B Y
A Y
B Y
A Y
B Z
C Z
C Z
C Z
B Y
B Y
A Y
C Z
C Y
B Z
A Z
C Z
C Y
B X
B X
A Z
B Y
A Z
B X
A Z
B Y
B Y
C Z
C Z
A Z
B Y
C Z
C Y
C Z
C Z
A Y
B X
C Y
A Y
B X
C Z
C Z
C Z
B Z
B Y
A Z
A Y
A Z
C Z
C Z
B Y
C Z
C Z
A Z
B Z
C Z
A Z
A Z
A Z
A Y
C X
B Y
B Y
A Y
C Z
B Y
B X
B Z
C Z
C Z
A Y
A Z
A Z
B Z
C Z
C Z
B Y
C Z
A Z
C Z
C Z
C X
B X
B Y
C Z
A Z
A Y
C Z
C Z
C Z
A Z
A Y
C Z
A Z
A Y
A Y
C Z
B X
C Z
C X
B Y
A Z
B Y
C Z
B X
A Z
A Y
C Z
A Z
C Z
A Z
C Z
C Z
A Y
A Z
A Z
B Z
A Z
A Z
C Z
A X
A Y
C X
A Z
A Z
B Z
B Y
A Z
C Z
B Z
C Z
A Z
C Z
B X
C Z
B Z
B Z
C Z
B Z
A Z
A Z
C Z
A Z
C X
C Z
A Y
A Z
A X
A Z
B Z
B Z
C Z
C X
A Y
C Z
A Z
A Z
A X
C Z
C Z
C X
B Z
B X
B Z
B Y
C Z
A Z
A Y
A Y
B X
A Y
A Y
C Z
C Z
B Z
A Z
B Z
C Z
A Z
B Y
B Y
C Z
A Z
C Z
A Z
B Y
A Z
C Z
B X
C Z
A Z
C Z
A Y
B Y
A Y
B Z
A Y
C Z
A Z
C Z
B X
B X
B Y
B X
C Z
A X
B Y
B Z
C Z
A Y
C Z
B Z
C Z
A Z
C X
C Z
A Z
A Y
C Z
C Z
B Y
C Z
B Y
C Z
C Z
B Z
A Z
C Z
B Y
B X
A Z
C Z
C Z
A Z
C Z
C Z
B Y
A Z
B X
C Z
B Y
B X
A Z
C Z
A Z
C Z
A Z
C Z
B Y
C Z
A Z
B X
C Z
A Y
A Y
A Z
A Y
A Z
A X
C Z
B X
B Z
C Z
A Z
C X
A Z
A Z
A Z
C Z
A Z
C Z`,
    text2: `
    <article class="day-desc"><h2 id="part2">--- Part Two ---</h2><p>The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: <code>X</code> means you need to lose, <code>Y</code> means you need to end the round in a draw, and <code>Z</code> means you need to win. Good luck!"</p>
<p>The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:</p>
<ul>
<li>In the first round, your opponent will choose Rock (<code>A</code>), and you need the round to end in a draw (<code>Y</code>), so you also choose Rock. This gives you a score of 1 + 3 = <em>4</em>.</li>
<li>In the second round, your opponent will choose Paper (<code>B</code>), and you choose Rock so you lose (<code>X</code>) with a score of 1 + 0 = <em>1</em>.</li>
<li>In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = <em>7</em>.</li>
</ul>
<p>Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of <code><em>12</em></code>.</p>
<p>Following the Elf's instructions for the second column, <em>what would your total score be if everything goes exactly according to your strategy guide?</em></p>
</article>
    `
}

self.exercise2.constants = {
    part_1: {
        X_POINTS: 1, // ROCK
        Y_POINTS: 2, // PAPER
        Z_POINTS: 3, // SCISSORS
        X: 'A',
        Y: 'B',
        Z: 'C',
        LOST_POINTS: 0,
        DRAW_POINTS: 3,
        WON_POINTS: 6,
        X_WIN: 'C',
        Y_WIN: 'A',
        Z_WIN: 'B'
    },
    part_2: {
        X: 0,
        Y: 3,
        Z: 6,
        A_POINTS: 1,
        B_POINTS: 2,
        C_POINTS: 3,
        A_WIN: 'C',
        B_WIN: 'A',
        C_WIN: 'B',
        A_LOSE: 'B',
        B_LOSE: 'C',
        C_LOSE: 'A'
    }
}

self.exercise2.helpers = {};

self.exercise2.helpers.getBMove = function (a, result, constants) {
    switch (result) {
        case 'Y':
            return a;
        case 'X':
            return constants[a+'_WIN'];
        case 'Z':
            return constants[a+'_LOSE'];
    }
}

self.exercise2.helpers.countSingleScorePart2 = function (b, result, constants) {
    let points = 0;
    points += constants[result];
    points += constants[b + '_POINTS'];
    return points;
}

self.exercise2.helpers.countSingleScorePart1 = function (a,b, constants) {
    let points = 0;
    points += constants[b + '_POINTS'];
    console.log(a,b, a == b, a == constants[b+'_WIN']);
    if (a == constants[b]) {
        points += constants.DRAW_POINTS;
    } else {
        if (a == constants[b+'_WIN']) {
            points += constants.WON_POINTS;
        } else {
            points += constants.LOST_POINTS;
        }
    }
    return points;
}

self.exercise2._executeFirst = (data) => {
    const constants = self.exercise2.constants.part_1;
    let total_points = 0;
    data = data.split('\n');
    for (var prop in data) {
        const vals = data[prop].split(' ');
        const PLAYER_A_MOVE = vals[0];
        const PLAYER_B_MOVE = vals[1];
        total_points += self.exercise2.helpers.countSingleScorePart1(PLAYER_A_MOVE, PLAYER_B_MOVE, constants);
    }

    return total_points;
}

self.exercise2._executeSecond = (data) => {
    const constants = self.exercise2.constants.part_2;
    let total_points = 0;
    data = data.split('\n');
    for (var prop in data) {
        const vals = data[prop].split(' ');
        const PLAYER_A_MOVE = vals[0];
        const RESULT = vals[1];
        const PLAYER_B_MOVE = self.exercise2.helpers.getBMove(PLAYER_A_MOVE, RESULT, constants);
        total_points += self.exercise2.helpers.countSingleScorePart2(PLAYER_B_MOVE, RESULT, constants);
        // total_points += self.exercise2.helpers.countSingleScorePart1(PLAYER_A_MOVE, PLAYER_B_MOVE, constants);
    }
    return total_points;
}

self.exercise2.executeFirst = () => {
    const totalScore = self.exercise2._executeFirst(self.exercise2.data);
    return 'The total score is '+totalScore;
}


self.exercise2.executeSecond = () => {
    const totalScore = self.exercise2._executeSecond(self.exercise2.data);
    return 'The total score is '+totalScore;
}