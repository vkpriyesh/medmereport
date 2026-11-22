# Lint settings for the installer scripts (CI: .github/workflows/install.yml).
@{
    Severity     = @('Error', 'Warning')
    ExcludeRules = @(
        # Installers talk to a person in a console window: coloured host output is the point.
        'PSAvoidUsingWriteHost',
        # -WithModels / -Purge are read inside nested functions (script scope), which the rule cannot see.
        'PSReviewUnusedParameter'
    )
}
