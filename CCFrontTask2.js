/**
 * Created by Ela Synowiec on 14/6/17.
 */

exports.damage = function(spellString) {

  const spellStartString = 'fe';
  const spellEndString = 'ai';

  const subSpells = {
    fe: 1,
    dai: 5,
    jee: 3,
    aine: 4,
    ain: 3,
    je: 2,
    ai: 2,
    ne: 2,
  };

  const spellStart = spellString.indexOf(spellStartString);
  const spellEnd = spellString.lastIndexOf(spellEndString);

  if (spellEnd < spellStart || spellStart === -1) return 0;

  let spell = spellString.substring(spellStart,
      spellEnd + spellEndString.length);

  // checking if 'fe' in spell string occurs only once
  const startRegEx = new RegExp(spellStartString, 'g');
  if ((spell.match(startRegEx) || []).length > 1) return 0;

  let damage = subSpells[spellEndString];
  spell = spell.substring(0, spell.length - spellEndString.length);
  const spellLength = spell.length;
  let calculatedSpellLength = 0;

  for (const subSpell in subSpells) {
    if (subSpells.hasOwnProperty(subSpell)) {
      const power = subSpells[subSpell];
      const regEx = new RegExp(subSpell, 'g');
      const count = (spell.match(regEx) || []).length;
      spell = spell.replace(subSpell, '');

      calculatedSpellLength += count * subSpell.length;
      damage += count * power;
    }
  }

  damage -= (spellLength - calculatedSpellLength);

  return damage < 0 ? 0 : damage;
};
