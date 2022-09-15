# Why joelang?

## Challenge
Many languages are verbose and difficult to read. The goal of joelang is for the developer to read code smoothly, and not have to do mental gymnastics to understand the flow of logic.

Let's establish a few ground truths, which I think we can agree on:
- Code is read far more often than it is written
- Code maintenace is longer than the time it took to write the original version
- Computing power is now cheaper than human time


## Solution
[KISS](https://en.wikipedia.org/wiki/KISS_principle). Keep the syntax concise, simlar to ruby, but without the magic.

In reality, simplicity is hard. But we do the hard work so you can do the easy work.

## Comparison

<table>
    <tr>
        <th>Use Case</th>
        <th>joelang</th>
        <th>Other Langs</th>
    </tr>
    <tr><th colspan="3">Conditions</th></tr>
    <tr>
        <td>Conditions to set a variable</td>
        <td>

![image](assets/joelang-when.svg)

</td>
<td>

![image](assets/js-switch.svg)

</td>
</tr>

<tr>
    <td>Conditionally add an item to array</td>
    <td>

![image](assets/joelang-conditional-arrays.svg)

</td>
<td>

![image](assets/js-conditional-arrays.svg)

</td>
</tr>
<tr><th colspan="3">Tuple / Array / Object / String access and splicing</th></tr>
<tr><td>Get some items from array</td><td>

![image](assets/joelang-access.svg)

- also works on tuples ...
- and on strings ...
- and objects too ... (the selective syntax)

</td>
<td>

![image](assets/js-access.svg)

</td>
</tr>
</table>
