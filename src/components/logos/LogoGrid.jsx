import behatLogo from '../../assets/behat_logo.png';
import dockerLogo from '../../assets/docker_logo.png';
import elasticLogo from '../../assets/elastic_logo.png';
import gitlabCiLogo from '../../assets/gitlab-ci_logo.png';
import phpspecLogo from '../../assets/phpspec_logo.png';
import phpunitLogo from '../../assets/phpunit_logo.png';
import psihLogo from '../../assets/psih_logo.png';
import smspLogo from '../../assets/smsp_logo.png';
import syliusLogo from '../../assets/sylius_logo.png';
import symfonyLogo from '../../assets/symfony_logo.png';
import vuejsLogo from '../../assets/vuejs_logo.png';
import reactLogo from '../../assets/react_logo.png';

const LogoGrid = () => {
  return (
    <div className="py-24 mx-2 bg-stone-300 sm:my-24 rounded-3xl">
      <div className="px-6 mx-auto max-w-7xl xl:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-xl md:grid-cols-3">
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={behatLogo} alt="Behat" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={dockerLogo} alt="Docker" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={elasticLogo} alt="Elastic" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={gitlabCiLogo} alt="GitLab CI" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={phpspecLogo} alt="PHPSpec" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={phpunitLogo} alt="PHPUnit" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={psihLogo} alt="PSIH" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={smspLogo} alt="SMSP" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={syliusLogo} alt="Sylius" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={symfonyLogo} alt="Symfony" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={vuejsLogo} alt="Vue.js" width="158" height="48" />
          </div>
          <div className="p-8 bg-stone-50">
            <img className="object-contain w-full max-h-12" src={reactLogo} alt="React" width="158" height="48" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
