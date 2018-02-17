#!/bin/bash
#!/
echo -e ""
echo -e " █████████████████████████████████████████████████ "
echo -e ""
echo -e "   \033[1m.DS_Store cleaner\033[0m"
echo -e ""
echo -e "   An stupid Bash to remove all the .DS_Store"
echo -e "   files in one proyect directory "
echo -e ""
echo -e "                                 by MiGatoSeneca"
echo -e "                             pablo@converfit.com"
echo -e ""
echo -e " █████████████████████████████████████████████████ "
echo -e ""
if [ -z $1 ]; then
  echo -e "Please expecific the directory to clean :)";
else
  echo -e "[\033[1mStart\033[0m] Lets remove all the .DS_Store from '$1'";
  find $1 -name '.DS_Store' -type f -delete
  echo -e "[\033[1mDone\033[0m]";
  echo -e ""
fi
